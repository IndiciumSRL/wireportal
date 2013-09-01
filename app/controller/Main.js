Ext.define('Wirephone.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.window.MessageBox'
    ],
    refs : [{
        ref: 'contentPanel',
        selector: 'container[itemId=mainContainer]'
    }],
    init: function(){
        console.log('Main controller has been loaded.');
        var me = this;
        me.control({
            'button[itemId=logout]': { click: me.logout },
            'panel[itemId=sidebar] treepanel': { itemclick: me.openModule }
        });
    },
    logout: function() {
        Ext.Msg.confirm('Logout','Are you sure you want to logout!?', function(id, value){
            if (id === 'yes') {
                Ext.Msg.alert('Logged out.', 'You are now logged out.');
            }
        });
    },
    /* Function responsible for changing the main view content depending on the module clicked. */
    openModule: function(el, record, item, index, e, eOpts) {
        var me = this;
        var mainContainer = me.getContentPanel();
        if (record.raw.controller == undefined) {
            return;
        }
        Ext.Msg.wait('Loading...');
        Ext.require(record.raw.controller, function(){
            var controller = me.application.controllers.get(record.raw.controller);
            Ext.Msg.hide();

            if (!controller) {
                controller = Ext.create(record.raw.controller, {
                    id: record.raw.controller,
                    application: me.application
                });

                me.application.controllers.add(controller);
                controller.init(me.application);
                controller.onLaunch(me.application);
            }

            mainContainer.removeAll();
            mainContainer.add(controller.getContent());
        });
    }
});
