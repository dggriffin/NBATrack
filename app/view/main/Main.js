Ext.define('NBAtrack.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'NBAtrack.view.main.MainController',
        'NBAtrack.view.main.MainModel'
    ],
    height: 'auto',
    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    listeners: {
        afterrender: 'onAfterRender'
    },
    items: [{
            xtype: 'panel',
            html: '<div style = "color: #FFF; font-size: 80px; font-family: Arvo, Helvetica, Arial, sans-serif; background-color: #157fcc; height: 100px;"><br/><br/>NBATrack</div>'
        }, {
            xtype: 'panel',
            layout: {
                // layout-specific configs go here
                type: 'accordion',
                titleCollapse: true,
                animate: true
            },
            itemId: 'info-panel',
            items: []
    }

       ]
});