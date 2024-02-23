<template>
  <li>
    <router-link
      :to="`/${index}`"
      class="nav-link m-2"
      :class="activeClasses"
      aria-current="page"
      :title="`this link goes to ${page.link.text}`"
      >{{ page.link.text }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["page", "isActive", "index"],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      };
    },
  },
};
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>
