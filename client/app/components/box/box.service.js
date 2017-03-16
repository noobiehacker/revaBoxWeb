import http from 'http';

class BoxService {
  constructor() {
    this.serverUrl = "http://localhost:5000/group"
    this.http = http;
  }

  getCategory(cb) {
    let queryUrl = this.serverUrl + "/category";
    this.http.get(queryUrl, cb);
  }

  createCategoryCallBack(){
    return function(response) {
        result = response.data;
        console.log(response)
        $log.info(response)
    };
  }

  getSubCategory(cb) {
    let queryUrl = this.serverUrl + "/subCategory";
    this.http.get(queryUrl, cb);
  }

  createSubCategoryCallBack(){
    return function(response) {
        result = response.data;
        console.log(response)
        $log.info(response)
    };
  }

}

export default BoxService;
