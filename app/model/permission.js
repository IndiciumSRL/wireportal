/**
 * @class Wirephone.model.permission
 * @extends Ext.data.Model
 * Description
 */
Ext.define('Wirephone.model.permission', {
    extend: 'Ext.data.Model',
    fields: ['name', 'action'],
    proxy: {
    	type: 'ajax',
    	url: 'data/permissions.json',
    	reader: {
            type: 'json',
            root: 'data'
        }
    }
});