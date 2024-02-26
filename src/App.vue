<template>
  <div id="content">
    <nav-bar />
    <router-view />
    <toast-msg message="" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ToastMsg from "./components/ToastMsg.vue";

export default {
  components: {
    NavBar,
    ToastMsg,
  },
  methods: {
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
