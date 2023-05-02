const express = require("express")
const bodyPArser = require("body-parser");
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

// Cors allow all
app.use(cors( { origin: '*' } ));


dotenv.config();

app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

const user_pembeliRoute = require('../app/routes/user_pembeliRoute');
const addressRoute = require('../app/routes/addressRoute');
const shopping_sessionRoute = require('../app/routes/shopping_sessionRoute');
const cart_itemRoute = require('../app/routes/cart_itemRoute');
const productRoute = require('../app/routes/productRoute');
const user_penjualRoute = require('../app/routes/user_penjualRoute');
const product_categoryRoute = require('../app/routes/product_categoryRoute');
const product_inventoryRoute = require('../app/routes/product_inventoryRoute');
const discountRoute = require('../app/routes/discountRoute');
const order_itemRoute = require('../app/routes/order_itemRoute');
const order_detailRoute = require('../app/routes/order_detailRoute');
const payment_detailRoute = require('../app/routes/payment_detailRoute');
const loginRoute = require('../app/routes/loginRoute');


app.use('/login', loginRoute);

app.use('/user_pembeli', user_pembeliRoute);
app.use('/address', addressRoute);
app.use('/shopping_session', shopping_sessionRoute);
app.use('/cart_item', cart_itemRoute);
app.use('/product', productRoute);
app.use('/user_penjual', user_penjualRoute);
app.use('/product_category', product_categoryRoute);
app.use('/product_inventory', product_inventoryRoute);
app.use('/discount', discountRoute);
app.use('/order_item', order_itemRoute);
app.use('/order_detail', order_detailRoute);
app.use('/payment_detail', payment_detailRoute);

app.get('/', (req, res) => res.send('Halo, calon admin MCI!'));

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));
