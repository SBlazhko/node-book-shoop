const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

//Handlebars import 
// const expressHDB = require('express-handlebars')

const app = express();

// Use ejs as a default engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Use express-handlebar as a default engine
// app.engine('handlebars', expressHDB({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout'}));
// app.set('view engine', 'handlebars')

// Use pug engine as a default 
// app.set('view engine', 'pug');
// app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorsController = require('./controllers/errors_controller');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

// Why this calls when 404 ?
app.use(errorsController.response404Error);

app.listen(3000);
