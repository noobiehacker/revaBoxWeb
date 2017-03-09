class WorkprocessController {
  constructor() {
    this.name = 'workprocess';
    this.tempString = 'A temporary string';
    this.category = [];
    this.selectedCategory;
    this.subcategoryMap = new Map();
  }

  getCategory() {
    return this.category
  }

  getSubCategory(key) {
    let hrIndex = this.category.findIndex((element) => {
        return element == key
    });
    //1)Return empty array if selected cat is undefined or not NR index
    if ((hrIndex < 0) || (this.selectedCategory == undefined)
    || (this.selectedCategory != this.category[hrIndex])){
      return []
    }else{
      //2Return the HR subcategory if key is hr index
      if (this.selectedCategory == this.category[hrIndex]){
        return this.subcategoryMap.get(this.selectedCategory)
      }
    }
  }

  getDataFromService() {
    let category = ["Engineering","Finance","HR"]
    let hrSubcategory = ["Finance","POD"]
    this.category = category
    this.subcategoryMap.set("HR",hrSubcategory)
  }

  getDisplayDropDown() {
    if(this.name == 'Category'){
      return this.category
    }else if(this.name == 'Sub-Category'){
      return this.getSubCategory(this.selectedCategory)
    }
  }

}

export default WorkprocessController;
