const express = require('express');
const app = express();

const hbs = require('express-handlebars');

//load middle ware for handlebares

//handlebars middlewares.
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//index route
app.get('/', (req, res) => {
    res.render('index');
});

//admissions route
app.get('/admissions', (req, res) => {
    res.render('admissions');
});

//legacyAlumna route
var alumnaRoute = 'legacy alumna';
app.get('/' + encodeURI(alumnaRoute), (req, res) => {
    res.render(alumnaRoute);
});

//contact Route
app.get('/contacts', (req, res) => {
    res.render('contacts');
});

//welcome section
app.get('/' + encodeURI('about legacy school'), (req, res) => {
        res.render('about');
    })
    //principal officers route
app.get('/' + encodeURI('principal officers'), (req, res) => {
    res.render('principal officers/principal officers');
})


app.use(express.static(__dirname));
app.use('/public', express.static('./public'));


const port = 5000;
app.listen(port, () => {
    console.log(`Your app is running on port ${port}`);
});