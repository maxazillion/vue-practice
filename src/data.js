const pageKey = "pages";

let pageJson = localStorage.getItem(pageKey);
let pagesStore = JSON.parse(pageJson);

function save() {
  localStorage.setItem(pageKey, JSON.stringify(pagesStore));
}

export default {
  addPage(page) {
    pagesStore.push(page);
    save();
  },
  getAllPages() {
    return pagesStore;
  },
  getSinglePage(index) {
    return pagesStore[index];
  },
  editPage(index, page) {
    pagesStore[index] = page;
    save();
  },
  removePage(index) {
    pagesStore.splice(index, 1);
    save();
  },
};
