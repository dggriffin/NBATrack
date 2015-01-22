Ext.define('NBAtrack.store.TodaysGamesStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'NBAtrack.model.TodaysGameModel',
    proxy: {
        type: 'ajax',
        url: '/resources/data.xml',
        reader : {
            type: 'xml',
            model: 'NBAtrack.model.TodaysGameModel',
            record : 'game',
            rootProperty: 'games'
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});