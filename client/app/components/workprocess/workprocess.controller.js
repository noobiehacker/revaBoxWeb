import http from 'http';

class WorkprocessController {

  constructor() {
    this.serverUrl = "http://localhost:5000"
    this.tempString = 'A temporary string';
    this.category = [];
    this.subcategoryMap = new Map();
    this.topName = "Category";
    this.bottomName = "Sub-Category";
    this.selectedCategory;
    this.http = http;
    this.getDataFromService();
  }

  getSubCategory(key) {
    let hrIndex = this.category.findIndex((element) => {
        return element == key
    });
    //1)Return empty array if selected cat is undefined or not NR index
    let noSubCategoryData = ((hrIndex < 0) || (this.selectedCategory == undefined)
    || (this.selectedCategory != this.category[hrIndex])
    || (!this.subcategoryMap.has(this.selectedCategory)))

    if (noSubCategoryData){
      return []
    }else if (this.selectedCategory == this.category[hrIndex]){
      //2Return the HR subcategory if key is hr index
      return this.subcategoryMap.get(this.selectedCategory)
    }
  }

  getDataFromService() {
    let category = ["Engineering","Finance","HR"]
    let hrSubcategory = ["Invoice","POD"]
    this.category = category
    this.subcategoryMap.set("Finance",hrSubcategory)
    this.getCategoryFromServer()
  }

  getCategoryFromServer() {
    let queryUrl = this.serverUrl + "/category";

    let cb = function(response) {
        result = response.data;
        console.log(response)
        $log.info(response)
      };

    let result = this.http.get(queryUrl, cb);

  }

  getSubCategoryFromServer(category){

  }

  getSubCategoryDropDown() {
    return this.getSubCategory(this.selectedCategory)
  }

  updateSelectedCategory(input){
    this.selectedCategory = input
  }

}

export default WorkprocessController;
