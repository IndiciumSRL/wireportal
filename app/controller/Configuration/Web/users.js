/**
 * @class Wirephone.controller.Configuration.Web.users
 * @extends Ext.app.Controller
 * Description
 */
Ext.define('Wirephone.controller.Configuration.Web.users', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.window.MessageBox',
        'Wirephone.view.Configuration.Web.Users.users'
    ],
    init: function() {
        var me = this;
    },
    getContent: function() {
        return Ext.create('Wirephone.view.Configuration.Web.Users.users', {

        });
    }
});