var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("GET");
  var options = {
    root: __dirname + "/../public/",
    //dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = 'index.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});



router.get('/invia', function(req, res, next) {
  console.log("ggtgtgttr");
  res.send("registrato con successo");
});

router.post('/user', function(req, res, next) {
  console.log();
  var requestData = {
  rfwfrfrrt: {
    slrerrfrfe: [
      {
        orrferrffrefin: "ZRH",
        destination: "DUS",
        date: "2014-12-02"
      }
    ],
    passengers: {
      adultCount: 1,
      infantInLapCount: 0,
      infantInSeatCount: 0,
      childCount: 0,
      seniorCount: 0
    },
    solutions: 2,
    refundable: false
  }
};

  request({
    url: "https://rdc2016.firebaseio.com/Users.json",
    method: "POST",
    json: true,
    headers: {
        "content-type": "application/json",
        },
    //json: requestData
    body: JSON.stringify(requestData)
    }, function (error, resp, body) {
      if(!error && response.statusCode==200){
          console.log(body);
          res.redirect('/invia');

      }
      else{
          console.log(error);
      }
    });
});

module.exports = router;
