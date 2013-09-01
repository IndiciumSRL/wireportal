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
            Ext.create('Wirephone.view.Viewport', {});
            Ext.Msg.hide();
    	});
    },
    
    hasPerm: function(context, action) {
        var me = this;
        var pStore = me.getWirephoneStorePermissionsStore();
        var result = false;
        
        pStore.filter([
            {property: 'name', value: context, exactMatch: true},
            {property: 'action', value: action, exactMatch: true},
        ]);
        
        if (pStore.getCount() == 0) {
            result = false;
        } else {
            result = true;
        }
        pStore.clearFilter(true);
        return result;
    }
});