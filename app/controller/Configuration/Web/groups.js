/**
 * @class Wirephone.controller.Configuration.Web.groups
 * @extends Ext.app.Controller
 * Description
 */
Ext.define('Wirephone.controller.Configuration.Web.groups', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.window.MessageBox',
        'Wirephone.view.Configuration.Web.Groups.groups'
    ],
    refs: [{
        selector: 'container[itemId=mainContainer] grid',
        ref: 'grid'
    },{
        selector: 'container[itemId=mainContainer] form',
        ref: 'form' 
    }],
    init: function() {
        var me = this;
        me.control({
            'container[itemId=mainContainer] grid': {
                selectionchange: me.selectionchange
            },
            'container[itemId=mainContainer] button[action=edit]': {
                click: me.editRecord   
            }
        });
    },

    getContent: function() {
        return Ext.create('Wirephone.view.Configuration.Web.Groups.groups', {
        });
    },

    selectionchange: function(g, records, eOpts) {
        var me = this;
        form = me.getForm();
        form.setReadOnlyForAll(true);
        form.loadRecord(records[0]);
        form.down('button[action=save]').hide();
        form.down('button[action=edit]').enable();
        form.down('button[action=delete]').enable();
    },

    editRecord: function() {
        var me = this;
        form = me.getForm();
        form.setReadOnlyForAll(false);
        form.down('button[action=save]').show();
    }
});