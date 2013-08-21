/**
 * @class Wirephone.model.Configuration.Web.groups
 * @extends Ext.data.Model
 * Description
 */
Ext.define('Wirephone.model.Configuration.Web.groups', {
    extend: 'Ext.data.Model',
    fields: ['name', 'note'],
    hasMany: [
    	{model: 'Wirephone.model.Configuration.Web.users', name: 'users', associationKey: 'users', foreignKey: 'group_id'}
    ],
    proxy: {
    	type: 'ajax',
    	url: 'data/groups.json',
    	reader: {
            type: 'json',
            root: 'data'
        }
    }
});