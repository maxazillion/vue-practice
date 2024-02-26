<template>
  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="" class="form-label"> Page Title </label>
          <input type="text" class="form-control" v-model="pageTitle" />
        </div>
        <div class="mb-3">
          <label for="" class="form-label"> Content </label>
          <textarea
            type="text"
            class="form-control"
            rows="5"
            v-model="content"
          />
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label"> Link Text </label>
          <input type="text" class="form-control" v-model="linkText" />
        </div>
        <div class="row mb-3">
          <div class="form-check">
            <label for="" class="form-check-label"> published </label>
            <input
              type="checkbox"
              class="form-check-input"
              v-model="published"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <button
        :disabled="isFormInvalid"
        class="btn btn-primary"
        @click.prevent="submitForm"
      >
        Create Page
      </button>
    </div>
  </form>
</template>

<script setup>
import { inject, ref, computed, watch } from "vue";
import { useRouter } from "vue-router";

const bus = inject("$bus");
const pages = inject("$pages");
const router = useRouter();

let pageTitle = ref("");
let content = ref("");
let linkText = ref("");
let published = ref(true);

function submitForm() {
  if (!pageTitle.value || !content.value || !linkText.value) {
    alert("please fill out form");
    return;
  }
  let newPage = {
    pageTitle: pageTitle.value,
    content: content.value,
    link: {
      text: linkText.value,
    },
    published: published.value,
  };

  pages.addPage(newPage);
  bus.$emit("page-created", newPage);
  bus.$emit("change-toast", { text: "page created!" });

  router.push({ path: "/pages" });
}

const isFormInvalid = computed(
  () => !pageTitle.value || !content.value || !linkText.value
);

watch(pageTitle, (newTitle, oldTitle) => {
  if (linkText.value == oldTitle) {
    linkText.value = newTitle;
  }
});
</script>
