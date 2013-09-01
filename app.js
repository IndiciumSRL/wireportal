var splashscreen;

Ext.onReady(function() {
    // Start the mask on the body and get a reference to the mask
    splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');
    // Add a new class to this mask as we want it to look different from the default.
    splashscreen.addCls('splashscreen');

    // Insert a new div before the loading icon where we can place our logo.
    Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
        cls: 'x-splash-icon'
    });
});

Ext.application({
    name: 'Wirephone',

    extend: 'Wirephone.Application',
    controllers: ['Wirephone.controller.permission', 'Wirephone.controller.Main'],

    launch: function() {
        Ext.getBody().unmask();
    },
    autoCreateViewport: false
});
