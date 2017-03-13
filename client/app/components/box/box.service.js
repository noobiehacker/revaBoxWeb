//import BoxSDK from 'box-node-sdk';

let BoxService = function () {
  const user = {};

  let createBoxClient = () => {
    return user;
    // Initialize SDK
    /*var sdk = new BoxSDK({
      clientID: 'dab95mxwvro2hniqxj5tw693celgmoee',
      // clientSecret: '5243kaAZJzlnlzjKyRkE1ZWbfs22H0L0'
    });*/
    // Create a basic API client
    // Creating and Generating a Developer Token, expires every 60 mins
    //let developerToken = 'W1u8a1pYU5aPEugE1hOl6J36t46AwXVz'
    //return sdk.getBasicClient(developerToken);
  };

  let getUserName = () => {
    return user;
    // client.users.get(client.CURRENT_USER_ID, null, function(err, currentUser) {
    //   if(err) throw err;
    //     console.log('Hello, ' + currentUser.name + '!');
    //   });
  };

  let getAllItemsInRootFolder = (callBack) => {
    return user;
    // client.folders.getItems( '0', {
    //         fields: 'name,modified_at,size,url,permissions,sync_state',
    //         offset: 0,
    //         limit: 25 }, callBack
    // );
  };

  let getCategory = () => {
    return user;
  };

  let getSubCategory = () => {
    return user;
  };

  return { createBoxClient, getUserName, getAllItemsInRootFolder, getCategory,
    getSubCategory
  };
};

export default BoxService;
