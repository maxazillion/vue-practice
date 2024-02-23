<template>
  <div id="content">
    <nav-bar :pages="pages" :active-page="activePage" />
    <router-view />
    <!-- <page-viewer v-if="pages.length > 0" :page="pages[activePage]" />
    <create-page @page-created="pageCreated" /> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  created() {
    this.pages = this.getPages();

    this.$bus.$on("navBarLinkActivated", (index) => {
      this.activePage = index;
    });
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
      this.pages.push(pageObj);
    },
  },
};
</script>
