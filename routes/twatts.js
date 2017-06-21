var express = require('express')
var router = express.Router()
var twattControllersSent = require('../controllers/twatt-posting-cont.js')
var twattControllersGo = require('../controllers/twatt-search-cont.js')
var twattControllersGet = require('../controllers/twatt-timeline-cont.js')


router.get('/:account/:recenttweetlimit', twattControllersGet.timeline)
router.post('/search', twattControllersGo.search)
router.post('/posting', twattControllersSent.posting)

module.exports = router
