/**
 * @class Wirephone.controller.permission
 * @extends Ext.app.Controller
 * Description
 */		
Ext.define('Wirephone.controller.permission', {
    extend: 'Ext.app.Controller',
    stores: ['Wirephone.store.permissions'],
    init: function(app) {
    	var me = this;
    	var permissions = me.getWirephoneStorePermissionsStore();
    	permissions.load(function(){
        	Ext.log('Store is now loaded.');
        	console.log(arguments);
    	});
    }
});