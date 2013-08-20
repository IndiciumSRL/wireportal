/**
 * @class Wirephone.view.main_sidebar.TelephonyConfig
 * @extends Ext.tree.Panel
 * Description
 */
Ext.define('Wirephone.view.main_sidebar.TelephonyConfig', {
    extend: 'Ext.tree.Panel',
    requires: [],
    alias: 'widget.wirephone.main_sidebar.telephonyconfig',
    title: 'Telephony Configuration',
    rootVisible: false,
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