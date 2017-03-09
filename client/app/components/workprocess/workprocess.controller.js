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

  getSubCategory() {
    //1)Get The selectedCategory as a key
    //
    let financeIndex = 2;
    if this.selectedCategory == this.category[financeIndex]
    return []
  }

  getDataFromService() {
    let category = ["Engineering","Finance","HR"]
    let hrSubcategory = ["Finance","POD"]
    this.category = category
    this.subcategoryMap.set("HR",hrSubcategory)
  }
}

export default WorkprocessController;
