const pageKey = "pages";

let pageJson = localStorage.getItem(pageKey);
let pagesStore = JSON.parse(pageJson);

export default {
  getAllPages() {
    return pagesStore;
  },
  getSinglePage(index) {
    return pagesStore[index];
  },
};
