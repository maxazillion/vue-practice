<template>
  <div v-if="show" class="toasty">
    <span>{{ message }}</span>
    <button class="btn" @click="hideToast">Close</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: "asdfasdf",
    };
  },
  inject: ["$toast", "$bus"],
  created() {
    this.$bus.$on("change-toast", ({ text }) => {
      this.showToast(text);
    });
  },
  methods: {
    showToast(message) {
      this.message = message;
      this.show = true;
      setTimeout(() => {
        this.hideToast();
      }, 2000);
    },
    hideToast() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.toasty {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.toasty button {
  background-color: transparent;
  border: none;
  color: #fff;
  background-color: #832424;
  cursor: pointer;
  margin-left: 10px;
}
</style>
