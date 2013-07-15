/*
 * File: app/store/Songs.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.Songs', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Song'
    ],

    config: {
        autoLoad: true,
        data: [
            {
                id: 1,
                name: 'Sencha Hits'
            },
            {
                id: 2,
                name: 'All Time Greats'
            },
            {
                id: 3,
                name: 'Sencha Rock'
            },
            {
                id: 4,
                name: 'Slow Jamming Sencha'
            },
            {
                id: 5,
                name: 'Sencha Blues'
            }
        ],
        groupField: 'name',
        model: 'MyApp.model.Song',
        storeId: 'Songs',
        proxy: {
            type: 'memory'
        }
    }
});