require('dotenv').config()
var OAuth = require('oauth');
var express = require('express')
var getting =  require('../models/twatt.js')

module.exports = {
  search: (req, res)=>{
    getting.connect((oauth)=>{
      oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${encodeURIComponent(req.body.search)}`,
        process.env.ACC_TOK, //test user token
        process.env.ACC_SEC, //test user secret
        function (e, data){
        res.json(data)
      });
    })
  }

}
