/**
 * @class Wirephone.view.Configuration.Web.groups.grid
 * @extends Ext.grid.Panel
 * Description
 */
Ext.define('Wirephone.view.Configuration.Web.Groups.grid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.toolbar.Paging',
        'Ext.ux.form.SearchField',
        'Wirephone.store.Configuration.Web.groups'
    ],
    title: 'Groups',
    alias: 'widget.webgroupgrid',
    initComponent: function() {
        var me = this;
        me.store = Ext.create('Wirephone.store.Configuration.Web.groups', {
        });
        me.dockedItems = [{
            xtype: 'pagingtoolbar',
            store: me.store,   // same store GridPanel is using
            dock: 'bottom',
            displayInfo: true
        },{
            xtype: 'toolbar',
            dock: 'top',
            items: {
                xtype: 'searchfield',
                store: me.store,
                fieldLabel: 'Search',
                labelWidth: 50,
                width: 400,
                padding: '0 0 0 5px'
            }
        }];
        me.columns = [
            { text: 'Name', dataIndex: 'name'},
            { text: 'Note', dataIndex: 'note', flex: 1}
        ];

        this.callParent(arguments);
    }
});