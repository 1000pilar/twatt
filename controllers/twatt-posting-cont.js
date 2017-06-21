require('dotenv').config()
var OAuth = require('oauth');
var express = require('express')
var getting =  require('../models/twatt.js')

module.exports = {
  posting: (req, res)=>{
    getting.connect((oauth)=>{
      oauth.post(
        `https://api.twitter.com/1.1/statuses/update.json?status=${encodeURIComponent(req.body.posting)}`,
        process.env.ACC_TOK, //test user token
        process.env.ACC_SEC, //test user secret
        req.body.posting,
        'text',
        function (e, data){
        res.json(data)
      });
    })
  }

}
