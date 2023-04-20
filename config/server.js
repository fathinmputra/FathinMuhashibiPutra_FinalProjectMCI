const express = require("express")
const bodyPArser = require("body-parser");
const app = express();
app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

const user_pembeliRoute = require('../app/routes/user_pembeliRoute');
const addressRoute = require('../app/routes/addressRoute');
const shopping_sessionRoute = require('../app/routes/shopping_sessionRoute');
const cart_itemRoute = require('../app/routes/cart_itemRoute');

app.use('/user_pembeli', user_pembeliRoute);
app.use('/address', addressRoute);
app.use('/shopping_session', shopping_sessionRoute);
app.use('/cart_item', cart_itemRoute);

app.get('/', (req, res) => res.send('Halo, calon admin MCI!'));

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));