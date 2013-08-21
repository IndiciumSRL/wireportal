/**
 * @class Wirephone.store.Configuration.Web.groups
 * @extends Ext.data.Store
 * Description
 */
Ext.define('Wirephone.store.Configuration.Web.groups', {
    extend: 'Ext.data.Store',
    requires: [
        'Wirephone.model.Configuration.Web.groups'
    ],
    model: 'Wirephone.model.Configuration.Web.groups',
    autoLoad: true
});