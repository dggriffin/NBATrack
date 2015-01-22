Ext.define('NBAtrack.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    stores: ['TodaysGamesStore', 'GameBoxStore'],

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onAfterRender: function (src) {
        this.viewComponent = src;
        console.log(Ext.getStore('TodaysGamesStore').getRange().length);
    },
    init: function () {
        var controller = this;
        
              var runner = new Ext.util.TaskRunner();
                            var task ;


        Ext.getStore('TodaysGamesStore').addListener('load', function () {
            console.log(Ext.getStore('TodaysGamesStore').getRange().length);

            var store = Ext.getStore('TodaysGamesStore');

            for (var i = 0; i < store.getRange().length; i++) {


                var imgPanel = Ext.create('Ext.panel.Panel', {
                    columnWidth: .15,
                    layout: 'vbox'
                });
                var home = store.getRange()[i].data.home;
                var wordArray = home.split(" ");
                var mascot = wordArray[wordArray.length - 1].toLowerCase();

                var changingImage = Ext.create('Ext.Img', {
                    src: '/resources/' + mascot + '.png',
                    padding: '0 0 0 0',
                });


                imgPanel.add(changingImage);



                var away = store.getRange()[i].data.away;
                var wordArray = away.split(" ");
                console.log(wordArray[wordArray.length - 1]);
                var mascot = wordArray[wordArray.length - 1].toLowerCase();

                var changingImage = Ext.create('Ext.Img', {
                    src: '/resources/' + mascot + '.png'
                });


                imgPanel.add(changingImage);




                var tpl = new Ext.XTemplate(
                    '<div style = "color: #999999; font-family: PT Sans, Helvetica, Arial, sans-serif; background-color: #FFF">home</div>',
                    '<hr/>',
                    '<div style = "color: #666; font-size: 40px; font-family: PT Sans, Helvetica, Arial, sans-serif; background-color: #FFF"><b>{home}</b></div>',
                    '<div style = "color: #999999;margin-top:40px; font-family: PT Sans, Helvetica, Arial, sans-serif; background-color: #FFF">away</div>',
                    '<hr/>',
                    '<div style = "color: #666; font-size: 40px; font-family: PT Sans, Helvetica, Arial, sans-serif; backgroun-color: #FFF"><b>{away}</b></div>',
                    '<div style = "margin-top:30px; "><p style = "color: #999999; font-family: PT Sans, Helvetica, Arial, sans-serif;">VENUE: {venue}</p></div>',

                    '<p style = "color: #999999; font-family: PT Sans, Helvetica, Arial, sans-serif;">STATUS: {status}</p>',
                    '<p style = "color: #999999; font-family: PT Sans, Helvetica, Arial, sans-serif;">TIME: {scheduled}</p>'
                );

                var panel = Ext.create('Ext.panel.Panel', {
                    columnWidth: .3,
                    margin: '40 0 0 0'
                });




                var away = store.getRange()[i].data.away;
                var wordArray = away.split(" ");
                console.log(wordArray[wordArray.length - 1]);
                var mascotAway = wordArray[wordArray.length - 1];


                var home = store.getRange()[i].data.home;
                var wordArray = home.split(" ");
                console.log(wordArray[wordArray.length - 1]);
                var mascotHome = wordArray[wordArray.length - 1];


                var wrapperHbox = Ext.create('Ext.panel.Panel', {
                    layout: 'column',
                    cls: 'jb-panel',
                    gameId: store.getRange()[i].data.id,
                    padding: '0 0 20 0',
                    title: mascotHome + ' vs ' + mascotAway + ' (' + store.getRange()[i].data.scheduled + ')',
                    columnWidth: .5,
                    listeners: {
                        expand: function (p, eOpts) {
                            Ext.Ajax.request({
                                url: 'resources/' + p.gameId + '_pbp.xml',
                                success: function (response) {
                                    Ext.getStore('PlayByPlayStore').loadRawData(response.responseXML);
                                }
                            });

                  
                        }
                    }
                });

                if (i === 0) {
                    Ext.Ajax.request({
                        url: 'resources/' + store.getRange()[i].data.id + '_pbp.xml',
                        success: function (response) {
                            Ext.getStore('PlayByPlayStore').loadRawData(response.responseXML);
                        }
                    });
                }


                panel.update(tpl.apply(store.getRange()[i].data));

                wrapperHbox.add(imgPanel);
                wrapperHbox.add(panel);

                var gameScore = Ext.create('Ext.panel.Panel', {
                    itemId: mascot,
                    columnWidth: .4,

                    items: [{
                        xtype: 'label',
                        style: 'float: right; '
                    }]
                });


                wrapperHbox.add(gameScore);


                wrapperHbox.add({
                    xtype: 'panel',
                    columnWidth: 1,
                    margin: '20 0 0 0',
                    items: [{
                        xtype: 'grid',
                        cls: 'jb-grid',
                        store: 'PlayByPlayStore',
                        columns: [{
                            text: 'play-by-play',
                            flex: 6,
                            dataIndex: 'description'
        }, {
                            text: 'team',
                            flex: 1,
                            dataIndex: 'attribution'
        }, {
                            text: 'clock',
                            flex: 1,
                            dataIndex: 'clock',
                            renderer: function (value) {
                                return value + ' left';
                            }
        }]
                }]
                });

                controller.viewComponent.down('#info-panel').add(wrapperHbox);
                controller.getGameBoxForGame(store.getRange()[i].data.id, mascot);




            }
        });




    },

    getGameBoxForGame: function (game_id, mascot) {
        var controller = this;
        Ext.Ajax.request({
            url: 'resources/' + game_id + '.xml',
            success: function (response) {



                var tpl = new Ext.XTemplate(
                    '<div style = "margin-top: 64px;color: #999999; font-align: right; font-family: PT Sans, Helvetica, Arial, sans-serif; backgroun-color: #FFF"> </div>',
                    '<hr/>',
                    '<div style = " margin-top: 15px; font-size: 40px; text-align: right; color: #999999; font-family: PT Sans, Helvetica, Arial, sans-serif;">{home_points_Q1} {home_points_Q2} {home_points_Q3} {home_points_Q4} <b>{home_points}</b></div>',
                    '<div style = "margin-top: 60px; font-size: 40px; text-align: right; color: #999999; font-family: PT Sans, Helvetica, Arial, sans-serif;">{away_points_Q1} {away_points_Q2} {away_points_Q3} {away_points_Q4} <b>{away_points}</b> </div>'
                );

                Ext.getStore('GameBoxStore').loadRawData(response.responseXML);
                console.log(Ext.getStore('GameBoxStore').getRange());

                var panel = Ext.create('Ext.panel.Panel', {
                    columnWidth: .5,
                    height: 300,
                    html: ''
                });

                panel.update(tpl.apply(Ext.getStore('GameBoxStore').first().data));

                controller.viewComponent.down('#' + mascot).add(panel);
            }
        });
    }
});