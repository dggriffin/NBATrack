
Ext.define('NBAtrack.model.PlayByPlayModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            mapping: '@id'

        },
          {
            name: 'description',
            mapping: 'description'

        },
        {
            name: 'attribution',
            mapping: 'attribution@name'

        },
        {
            name: 'posession',
            mapping: 'possession@name'

        },
        {
            name: 'clock',
            mapping: '@clock'

        },
        
    
        

],    
    
    proxy: {
        type: 'ajax',
        url: '/resources/c5dabdeb-d40e-46b3-920e-910d695827e7_pbp.xml',
        reader: {
            type: 'xml',
            rootProperty: 'quarter:last',
            record: 'event'
        }
    }

});