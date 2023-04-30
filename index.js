const express = require('express')
const app = express()
const port = 5000
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render("index"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
