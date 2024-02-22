<template>
  <nav
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expanded-lg']"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> My Vue </a>
      <ul class="navbar-nav me-auto d-flex flex-row">
        <li
          v-for="(page, index) in publishedPaged"
          class="nav-item m-2"
          :key="index"
        >
          <nav-bar-link
            :page="page"
            :isActive="activePage == index"
            @click.prevent="navLinkClick(index)"
          >
          </nav-bar-link>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme()">
          toggle
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import NavBarLink from "./NavBarLink.vue";
export default {
  components: {
    NavBarLink,
  },
  created() {
    this.getThemeSetting();
  },
  computed: {
    publishedPaged() {
      return this.pages.filter((p) => p.published);
    },
  },
  props: ["pages", "activePage", "navLinkClick"],
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    changeTheme() {
      let theme = "light";

      if (this.theme == "light") {
        theme = "dark";
      }

      this.theme = theme;
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
    },
    getThemeSetting() {
      let theme = localStorage.getItem("theme");
      this.theme = theme ? theme : "light";
    },
  },
};
</script>
