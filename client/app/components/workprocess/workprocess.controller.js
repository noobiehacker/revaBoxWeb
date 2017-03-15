class WorkprocessController {
  constructor() {
    this.tempString = 'A temporary string';
    this.category = [];
    this.subcategoryMap = new Map();
    this.topName = "Category";
    this.bottomName = "Sub-Category";
    this.selectedCategory;
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
  }

  getSubCategoryDropDown() {
    return this.getSubCategory(this.selectedCategory)
  }

  updateSelectedCategory(input){
    this.selectedCategory = input
  }

}

export default WorkprocessController;
