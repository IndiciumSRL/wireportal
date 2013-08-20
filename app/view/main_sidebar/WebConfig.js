/**
 * @class Wirephone.view.main_sidebar.WebConfig
 * @extends Ext.tree.Panel
 * Description
 */
Ext.define('Wirephone.view.main_sidebar.WebConfig', {
    extend: 'Ext.tree.Panel',
    requires: [],
    alias: 'widget.wirephone.main_sidebar.webconfig',
    title: 'Web Configuration',
    rootVisible: false,
    root: {
        expanded: true,
        leaf: false,
        children: [{
            text: 'User Configuration',
            expanded: false,
            leaf: false,
            children: [{
                text: 'Users',
                leaf: true,
                controller: 'Wirephone.controller.Configuration.Web.users'
            },{
                text: 'Groups',
                leaf: true,
                controller: 'Wirephone.controller.Configuration.Web.groups'
            },{
                text: 'Permissions',
                leaf: true
            },{
                text: 'Roles',
                leaf: true
            }]
        },{
            text: 'Dashboard',
            leaf: true
        }]
    }
});