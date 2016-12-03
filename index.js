var express = require('express')
var app = express()

var gallery = require('express-photo-gallery')

var options = {
  title: 'Sedano\'s Steam Gallery'
}

app.set('port', (process.env.PORT || 5000));

app.use('/', gallery('steam', options));

 
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});