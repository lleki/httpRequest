function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


  var https = require('https');

  https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  let chunk = " ";
  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    chunk += data;
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log("Buffered data:" + chunk + "\n");
  });

});


}

getAndPrintHTML();