Ext.define('NBAtrack.store.GameBoxStore', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    model: 'NBAtrack.model.GameBoxModel',
    proxy: {
        type: 'ajax',
        url: '/nbatrack/resources/c5dabdeb-d40e-46b3-920e-910d695827e7.xml',
        reader : {
            type: 'xml',
            model: 'NBAtrack.model.GameBoxModel',
            record : 'game',
            rootProperty: 'game'
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});