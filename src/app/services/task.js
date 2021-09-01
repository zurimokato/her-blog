const router = require('express').Router();


var request = require("request");
 router.get('/',(req,res,next)=>{
//var variable = req.params.id.split(',');

//FA435ADA-4F3E-4474-8E5F-C230F9405DB2
request.get('https://tstdrv2156523.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=901&deploy=1&id=23855&type=salesorder', {
  oauth: {
    consumer_key: '9d9b92d82c1d48e175f7fccd14e5ef74a20387fe3df53710fe364043dbf29a5f',
    consumer_secret: '5acf9ba8469d8f190754df9d1af413a056be4295bcb2ba2aeb7403a7daf7c18e',
    token: '80596fa05df6def9e6d25e58d328bfb02081933e4af82861a7b82d5501cb914e',
    token_secret: 'ad92afacbb5ee51793e6dd2fc2715f5d57b6696c1e37d2261ba66d47b9aa444a',
    realm: "TSTDRV2156523"
  }
}, function (err, resp, body) {
  var result = require('querystring').parse(body);
 // console.log(body);
res.send(body);
//return req.params.id;
});
});


module.exports = router;