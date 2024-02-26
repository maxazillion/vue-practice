<template>
  <div>
    <h4>Edit {{ page.pageTitle }}</h4>
    <form action="" class="container mb-3">
      <div class="row">
        <div class="col-md-8">
          <div class="mb-3">
            <label for="" class="form-label"> Page Title </label>
            <input type="text" class="form-control" v-model="page.pageTitle" />
          </div>
          <div class="mb-3">
            <label for="" class="form-label"> Content </label>
            <textarea
              type="text"
              class="form-control"
              rows="5"
              v-model="page.content"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="" class="form-label"> Link Text </label>
            <input type="text" class="form-control" v-model="page.link.text" />
          </div>
          <div class="row mb-3">
            <div class="form-check">
              <label for="" class="form-check-label"> published </label>
              <input
                type="checkbox"
                class="form-check-input"
                v-model="page.published"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <button class="btn btn-primary me-2" @click.prevent="submit">
          Edit
        </button>
        <button class="btn btn-secondary me-2" @click.prevent="goToPagesList">
          Cancel
        </button>
        <button class="btn btn-danger" @click.prevent="deletePage">
          delete
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { defineProps, inject } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const pages = inject("$pages");
const bus = inject("$bus");
const props = defineProps(["index"]);
let page = pages.getSinglePage(props.index);

function submit() {
  pages.editPage(props.index, page);
  bus.$emit("page-updated", {
    props,
    page,
  });
  bus.$emit("change-toast", { text: "page updated!" });

  goToPagesList();
}

function goToPagesList() {
  router.push({ path: "/pages" });
}

function deletePage() {
  pages.removePage(props.index);

  bus.$emit("page-deleted", {
    props,
  });
  bus.$emit("change-toast", { text: "page deleted!" });

  goToPagesList();
}
</script>
