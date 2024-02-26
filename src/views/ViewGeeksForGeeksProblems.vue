<template>
  <div>
    <h4>{{ `${$pages.geeksForGeeksProblems[props.index].problemTitle}` }}</h4>
    <div>
      <textarea
        v-model="$pages.geeksForGeeksProblems[props.index].code"
        class="code-editor"
      />
    </div>
    <div class="d-flex justify-content-between">
      <div>
        <button
          @click="
            () =>
              copyToClipboard($pages.geeksForGeeksProblems[props.index].code)
          "
          class="btn btn-primary me-2"
        >
          Copy Text
        </button>
        <a
          href="https://codepen.io/pen/?editors=1011"
          target="_blank"
          class="btn"
        >
          Go to Code Editor
        </a>
      </div>
      <button @click="handleBackClick" class="btn btn-secondary">Back</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, inject } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const $pages = inject("$pages");
const props = defineProps(["index"]);
const $toast = inject("$toast");
const $bus = inject("$bus");

function handleBackClick() {
  router.push({ path: "/problems" });
}

function copyToClipboard(text) {
  const textToCopy = text;
  navigator.clipboard.writeText(textToCopy);
  $toast.changeMsg("text coppied to clipboard");
  $bus.$emit("change-toast", { text });
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
  background-color: #000;
  color: #fff;
}
</style>
