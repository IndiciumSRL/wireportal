/**
 * @class Wirephone.view.Configuration.Web.groups
 * @extends Ext.panel.Panel
 * Description
 */
Ext.define('Wirephone.view.Configuration.Web.Groups.groups', {
    extend: 'Ext.panel.Panel',
    requires: [
    	'Wirephone.view.Configuration.Web.Groups.grid',
        'Wirephone.view.Configuration.Web.Groups.form',
    	'Ext.form.Panel'
    ],
    layout: {
    	type: 'border'
    },
    header: false,
    items: [{
        xtype: 'webgroupgrid',
    	region: 'center',
    	layout: 'fit',
    	flex: 1
    },{
    	header: false,
    	region: 'south',
    	xtype: 'webgroupform',
    	flex: 1,
    	split: true,
	    bodyPadding: 10
    }]
});