var express = require('express');
var BoxSDK = require('box-node-sdk');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

// Initialize SDK
var sdk = new BoxSDK({
  clientID: 'dab95mxwvro2hniqxj5tw693celgmoee',
  clientSecret: '5243kaAZJzlnlzjKyRkE1ZWbfs22H0L0'
});

// Create a basic API client
// Creating and Generating a Developer Token, expires every 60 mins
var client = sdk.getBasicClient('IdSqAIHSUCkD7J67hVsVR1FjWtkrODre');

// Get some of that sweet, sweet data!
client.users.get(client.CURRENT_USER_ID, null, function(err, currentUser) {
  if(err) throw err;
  console.log('Hello, ' + currentUser.name + '!');
});

client.folders.getItems( '0', {
        fields: 'name,modified_at,size,url,permissions,sync_state',
        offset: 0,
        limit: 25 },
        function(err, data) {
          if(err) throw err;
          console.log('data is' + data,keys());
        }
);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
