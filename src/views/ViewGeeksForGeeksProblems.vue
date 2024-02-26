<template>
  <div>
    <h4>{{ `${$pages.geeksForGeeksProblems[props.index].problemTitle}` }}</h4>
    <div>
      <textarea
        v-model="$pages.geeksForGeeksProblems[props.index].code"
        class="code-editor"
      ></textarea>
    </div>
    <button @click="handleBackClick" class="btn btn-primary">Back</button>
  </div>
</template>

<script setup>
import { defineProps, inject } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const $pages = inject("$pages");
const props = defineProps(["index"]);

function handleBackClick() {
  router.push({ path: "/problems" });
}
</script>

<style scopded>
.code-editor {
  width: 100%;
  height: 300px;
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  background-color: #000; /* Set black background color */
  color: #fff; /* Set white text color */
}
</style>
