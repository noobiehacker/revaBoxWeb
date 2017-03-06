export class BoxService{

  var developerToken = 'IdSqAIHSUCkD7J67hVsVR1FjWtkrODre'

  getAllItemsInRootFolder(callBack){
    client.folders.getItems( '0', {
            fields: 'name,modified_at,size,url,permissions,sync_state',
            offset: 0,
            limit: 25 }, callBack
    );
  }

  getCategory(){

  }

  getSubCategory(){

  }

  searchBoxBackend(){

  }

  setUp(){
    var BoxSDK = require('box-node-sdk');
    // Initialize SDK
    var sdk = new BoxSDK({
      clientID: 'dab95mxwvro2hniqxj5tw693celgmoee',
      clientSecret: '5243kaAZJzlnlzjKyRkE1ZWbfs22H0L0'
    });
    // Create a basic API client
    // Creating and Generating a Developer Token, expires every 60 mins
    var client = sdk.getBasicClient(developerToken);
    // Get some of that sweet, sweet data!
  }

  getUserName(){
    client.users.get(client.CURRENT_USER_ID, null, function(err, currentUser) {
      if(err) throw err;
      console.log('Hello, ' + currentUser.name + '!');
    });
  }

}
// angular.module('boxService', [])
//   .service('sampleSvc', ['$window', 'modalSvc', function($window, modalSvc){
//     this.showDialog = function(message, title){
//       if(title){
//         modalSvc.showModalDialog({
//           title: title,
//           message: message
//         });
//       } else {
//         $window.alert(message);
//       }
//     };
//   }]);
