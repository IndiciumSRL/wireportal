/**
 * @class Wirephone.model.Configuration.Web.users
 * @extends Ext.data.Model
 * Description
 */
Ext.define('Wirephone.model.Configuration.Web.users', {
    extend: 'Ext.data.Model',
    fields : ['username', 'fullname', 'group_id'],
    proxy: {
    	type: 'ajax',
    	url: 'data/users.json',
    	reader: {
            type: 'json',
            root: 'data'
        }
    }
});