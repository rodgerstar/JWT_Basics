const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;


app.get(['/', '/index', '/index.html'], (req, res) => {
    // res.sendFile('./views/index.html', {root: __dirname})
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get(['/new-page', '/new-page.html'], (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

app.get(['/old-page', '/old-page.html'], (req, res) => {
    res.redirect(301, '/new-page.html')
})

//Route Handlers
app.get(['/hello', '/hello.html'], (req, res, next) => {
    console.log('attempted to load hello.html')
    next()
}, (req, res) => {
    res.send('Hello Rasta!')
})

//Chaining route handlers
const one = (req, res, next) => {
    console.log('one')
    next();
}
const two = (req, res, next) => {
    console.log('two')
    next();
}
const three = (req, res) => {
    console.log('three')
    res.send('Finished')
}

app.get(['/chain', 'chain.html'], [one, two, three]);


app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


 

app.listen(PORT, () => console.log(`server is up and running on port ${PORT} Rasta!`))



