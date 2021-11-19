const express = require('express')(),
      zumo = require('azure-mobile-apps')();
      module.exports = {
            cors: {
                  origins: [ 'https://testzumo.azurewebsites.net/' ]
            },
            data: {
              provider: 'mssql',
              server: 'https://testzumo.azurewebsites.net/',
              database: 'quickstart',
              user: 'zumoadmin',
              password: 'Pchjnpt7ml24hyx!'
            },
          logging: {
              level: 'verbose'
          }
      };

zumo.tables.add('TodoItem');
zumo.tables.add('TodoModel');
zumo.tables.add('TripDetailsModel');
zumo.tables.add('ShoppingListModel');
express.use(zumo);
express.listen(process.env.PORT || 3000);
