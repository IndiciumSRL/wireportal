/**
 * @class Wirephone.plugin.Permission
 * @extends Ext.AbstractPlugin
 * Description
 */
Ext.define('Wirephone.plugin.Permission', {
    extend: 'Ext.AbstractPlugin',

    alias: 'plugin.wirephone.permission',
    config: {
    	context: null,
    	action: null,
    	hide: true
    },
    constructor: function(config) {
    	var me = this;
    	me.initConfig(config);
        me.callParent(arguments);
    },

    init: function(client) {
    	var me = this;
    	var app = Wirephone.getApplication();
    	var permController = app.controllers.get('Wirephone.controller.permission');
    	if (!permController.hasPerm(me.getContext(), me.getAction())) {
    		if (me.getHide()) {
    			client.hide();
    		} else {
    			client.disable();
    		}
    	}
    }
});