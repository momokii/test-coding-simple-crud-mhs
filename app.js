const express = require('express')
const body_parser = require('body-parser')

const PORT = 8000

//* Routing
const routing = require('./routes/routes')

// * ---------- APP config
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(body_parser.urlencoded({extended: false }))


// * error handling
app.use(routing)
app.use((error, req, res, next) => {
    res.status(500).render('500', {
        pageTitle: 'error 500',
        path: '/500'
    })
})


async function start_server(){
    try{
        app.listen(PORT)
        console.log('Connected to Port ' + PORT)
    } catch (e) {
        console.log(e)
    }
}
start_server()