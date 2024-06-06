const express = require('express');
const path = require('path')
const app = express()
const port = 5000 || process.env.PORT;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.redirect('/dashboard'))

app.get('/dashboard', (req, res) => res.render('index.ejs', {title: 'Tienda de productos Online'}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})