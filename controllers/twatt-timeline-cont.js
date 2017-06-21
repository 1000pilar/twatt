require('dotenv').config()
var OAuth = require('oauth');
var express = require('express')
var getting =  require('../models/twatt.js')

module.exports = {
  timeline: (req, res)=>{
    getting.connect((oauth)=>{
      oauth.get(
        `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${encodeURIComponent(req.params.account)}&count=${encodeURIComponent(req.params.recenttweetlimit)}`,
        process.env.ACC_TOK, //test user token
        process.env.ACC_SEC, //test user secret
        function (e, data){
        res.json(data)
      });
    })
  }

}
