/**
 * @class Wirephone.view.Configuration.Web.Groups.form
 * @extends Ext.form.Panel
 * Description
 */
Ext.define('Wirephone.view.Configuration.Web.Groups.form', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.layout.component.FieldSet',
        'Ext.form.FieldSet'
    ],
    defaultType: 'textfield',
    title: 'Group form',
    alias: 'widget.webgroupform',
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'fieldset',
            title: 'General',
            collapsible: true,
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items: [{
                fieldLabel: 'Name',
                xtype: 'textfield',
                name: 'name',
                allowBlank: false
            },{
                fieldLabel: 'Notes',
                name: 'note',
                xtype: 'textareafield',
                allowBlank: true
            }]
        },{
            xtype: 'grid',
            itemId: 'users',
            store: Ext.create('Wirephone.store.Configuration.Web.groups', {}),
            columns: [
                { text: 'Username', dataIndex: 'username', flex: 1},
                { text: 'Full Name', dataIndex: 'fullname', flex: 2}
            ],
            title: 'Users'
        }];
        me.tbar = {
            items: ['->', {
                text: 'Add',
                action: 'add',
                iconCls: 'icon-add'
            },{
                text: 'Edit',
                action: 'edit',
                disabled: true
            },{
                text: 'Delete',
                action: 'delete',
                disabled: true,
                iconCls: 'icon-delete'
            }]
        };
        me.buttons = [{
            text: 'Save',
            action: 'save',
            iconCls: 'icon-save',
            hidden: true
        }];
        me.callParent(arguments);
        me.setReadOnlyForAll(true);
    },
    setReadOnlyForAll: function (bReadOnly) {
        this.getForm().getFields().each (function (field) {
            if (field instanceof Ext.form.Field) {
                field.setDisabled(bReadOnly);
            }
        });
    }
});