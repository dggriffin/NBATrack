Ext.define('NBAtrack.model.TodaysGameModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'venue',
            mapping: 'venue@name'
        },
        {
            name: 'home',
            mapping: 'home@name'
        },
        {
            name: 'away',
            mapping: 'away@name'
        },
        {
            name: 'status',
            mapping: '@status'
        },
        {
            name: 'scheduled',
            mapping: '@scheduled'
            
        },
        {
            name: 'id',
            mapping: '@id'
            
        }  

],
});