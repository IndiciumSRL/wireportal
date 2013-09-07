/**
 * @class Wirephone.view.main_sidebar.TelephonyConfig
 * @extends Ext.tree.Panel
 * Description
 */
Ext.define('Wirephone.view.main_sidebar.TelephonyConfig', {
    extend: 'Ext.tree.Panel',
    requires: ['Wirephone.plugin.Permission'],
    alias: 'widget.wirephone.main_sidebar.telephonyconfig',
    title: 'Telephony Configuration',
    rootVisible: false,
    useArrows: true,
    plugins: [
        {
            ptype: 'wirephone.permission',
            context: 'config',
            action: 'read'
        }
    ],
    root: {
        text: 'Root',
        expanded: true,
        leaf: false,
        children: [{
            text: 'Connectivity',
            expanded: false,
            leaf: false,
            children: [{
                text: 'TDM',
                leaf: true
            },{
                text: 'SIP',
                leaf: true
            }]
        }]
    }
});