var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var twatts = require('./routes/twatts.js')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/twatt', twatts)

app.listen(3000, ()=>{
  console.log(`Connect to port: 3000`);
})
