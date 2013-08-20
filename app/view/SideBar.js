/**
 * @class Wirephone.view.SideBar
 * @extends Ext.panel.Panel
 * Description
 */
Ext.define('Wirephone.view.SideBar', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Accordion',
        'Wirephone.view.main_sidebar.WebConfig',
        'Wirephone.view.main_sidebar.TelephonyConfig'
    ],
    itemId: 'sidebar',
    alias: 'widget.wirephone.sidebar',
    title: 'Menu options',
    flex: 1,
    split: true,
    collapsible: true,
    header: false,
    region: 'west',
    layout: 'accordion',
    items: [{
        xtype: 'wirephone.main_sidebar.webconfig'
    },{
       xtype: 'wirephone.main_sidebar.telephonyconfig' 
    }]

});