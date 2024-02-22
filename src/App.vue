<template>
  <div id="content">
    <nav-bar
      :pages="pages"
      :active-page="activePage"
      :nav-link-click="(index) => (activePage = index)"
    />
    <!-- <page-viewer v-if="pages.length > 0" :page="pages[activePage]" /> -->
    <create-page :page-created="pageCreated" />
  </div>
</template>

<script>
// import PageViewer from "./components/PageViewer.vue";
import NavBar from "./components/NavBar.vue";
import CreatePage from "./components/CreatePage.vue";

export default {
  components: {
    // PageViewer,
    NavBar,
    CreatePage,
  },
  created() {
    this.pages = this.getPages();
  },
  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();
      this.pages = data;
    },
    pageCreated(pageObj) {
      console.log(pageObj);
      this.pages.push(pageObj);
    },
  },
};
</script>
