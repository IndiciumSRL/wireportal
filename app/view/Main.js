Ext.define('Wirephone.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.toolbar.TextItem',
        'Ext.layout.container.Border',
        'Wirephone.view.SideBar'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region : 'north',
        border: 'false',
        tbar: [{
            text: '<b>WirePhone Configuration Portal</b> - Version: <i>1.6.0</i>',
            xtype: 'tbtext'
        }, '->', {
            text: '<b>Logged as:</b> João Mesquita',
            xtype: 'tbtext'
        },'-', {
            text: 'Logout',
            itemId: 'logout'
        }]
    },{
        xtype: 'wirephone.sidebar'
    },{
        region: 'center',
        xtype: 'container',
        itemId: 'mainContainer',
        layout: 'fit',
        flex: 4,
        items: [{
            title: 'Welcome',
            html: '<h1><center>Welcome to Wirephone Configuration Portal!</center></h1><p>Please select option on the left hand side menu.</p>'
        }]
    }]
});