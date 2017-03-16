let BoxService = function () {
  const user = {};

  let getCategory = () => {
      return user;
  };

  let getSubCategory = () => {
      return user;
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

  return { getUserName, getAllItemsInRootFolder, getCategory,
    getSubCategory
  };
};

export default BoxService;
