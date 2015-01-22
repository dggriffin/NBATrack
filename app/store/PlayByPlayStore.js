Ext.define('NBAtrack.store.PlayByPlayStore', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    model: 'NBAtrack.model.PlayByPlayModel',
   sorters: [{
        property: 'clock',
        direction: 'ASC'
    }],

    //TODO - add data, formulas and/or methods to support your view
});