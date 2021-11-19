const express = require('express')(),
      zumo = require('azure-mobile-apps')();

zumo.tables.add('TodoItem');
zumo.tables.add('TodoModel');
zumo.tables.add('TripDetailsModel');
zumo.tables.add('ShoppingListModel');
express.use(zumo);
express.listen(process.env.PORT || 3000);
