require('dotenv').config()
var OAuth = require('oauth');

module.exports = {
  connect: (callback)=>{
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.APP_KEY,
      process.env.APP_SEC,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    callback(oauth)
  }
}
