<template>
  <nav
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expanded-lg']"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> Jason's Practice </a>
      <ul class="navbar-nav me-auto d-flex flex-row">
        <li>
          <router-link
            to="/"
            active-class="active"
            class="nav-link m-2"
            aria-current="page"
            >About
          </router-link>
        </li>
        <nav-bar-link
          v-for="(page, index) in publishedPaged"
          class="nav-item"
          :key="index"
          :index="index"
          :page="page"
        >
        </nav-bar-link>
        <li>
          <router-link
            to="/pages"
            active-class="active"
            class="nav-link m-2"
            aria-current="page"
            >Pages
          </router-link>
        </li>
        <li>
          <router-link
            to="/problems"
            active-class="active"
            class="nav-link m-2"
            aria-current="page"
            >Problems
          </router-link>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme()">
          {{ theme == "dark" ? "light" : "dark" }}
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
  inject: ["$pages", "$bus"],
  created() {
    this.getThemeSetting();
    this.pages = this.$pages.getAllPages();
    this.$bus.$on("page-updated", () => {
      this.pages = [...this.$pages.getAllPages()];
    });
    this.$bus.$on("page-created", () => {
      this.pages = [...this.$pages.getAllPages()];
    });
    this.$bus.$on("page-deleted", () => {
      this.pages = [...this.$pages.getAllPages()];
    });
  },
  computed: {
    publishedPaged() {
      if (!this.pages) {
        return [];
      }
      return this.pages.filter((p) => p.published);
    },
  },
  data() {
    return {
      theme: "light",
      pages: [],
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
