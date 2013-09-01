/**
 * @class Wirephone.controller.permission
 * @extends Ext.app.Controller
 * Description
 */		
Ext.define('Wirephone.controller.permission', {
    extend: 'Ext.app.Controller',
    stores: ['Wirephone.store.permissions'],
    views: ['Wirephone.view.Viewport'],
    init: function(app) {
    	var me = this;
    	var permissions = me.getWirephoneStorePermissionsStore();
        Ext.Msg.wait('Loading permissions...');
    	permissions.load(function(){
        	console.log('Store is now loaded.');
            Ext.create('Wirephone.view.Viewport', {});
            Ext.Msg.hide();
    	});
    },
    
    hasPerm: function(context, action) {
        var me = this;
        var pStore = me.getWirephoneStorePermissionsStore();
        
        Ext.log('Being requested for context '+context+' action '+action);
        
        var records = pStore.filter([
            {property: 'name', value: context},
            {property: 'action', value: action},
        ]);
        pStore.clearFilter(true);
        if (records == null) {
            return false;
        } else {
            return true;
        }
    }
});