Ext.Loader.setPath('Ext.ux', 'ext/examples/ux');
Ext.define('Wirephone.Application', {
    name: 'Wirephone',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
        'Wirephone.view.SideBar',
        'Wirephone.view.main_sidebar.TelephonyConfig'
    ],

    controllers: [
        // TODO: add controllers here
        'Wirephone.controller.Main'
    ],

    stores: [
        // TODO: add stores here
    ]
});
