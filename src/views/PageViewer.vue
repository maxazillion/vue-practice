<template>
  <div v-if="page" class="container">
    <h2>{{ page.pageTitle }}</h2>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  props: ["index"],
  inject: ["$pages"],
  created() {
    const page = this.$pages.getSinglePage(this.index);
    this.page = page;
  },
  data() {
    return {
      page: null,
    };
  },
  watch: {
    index(newIndex) {
      this.page = this.$pages.getSinglePage(newIndex);
    },
  },
};
</script>
