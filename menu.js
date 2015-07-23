var remote = require('remote')
var Menu = remote.require("menu")

var menu = Menu.buildFromTemplate([
    {
        label: 'MyMenu',
        submenu: [
            {
                //type: 'checkbox',
                label: 'Test',
                click: function () {
                    console.log('clicked..');
                }
            }
        ]
    }
]);


Menu.setApplicationMenu(menu);
