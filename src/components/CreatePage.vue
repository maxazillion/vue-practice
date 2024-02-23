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
        <div class="mb-3">
          <label for="" class="form-label"> Link URL </label>
          <input type="text" class="form-control" v-model="linkUrl" />
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

<script>
export default {
  emits: {
    //Validation is optional
    pageCreated({ pageTitle, content, link }) {
      if (!pageTitle) {
        return false;
      }
      if (!content) {
        return false;
      }
      if (!link || !link.text || !link.url) {
        return false;
      }
      return true;
    },
  },
  computed: {
    isFormInvalid() {
      return (
        !this.pageTitle || !this.content || !this.linkText || !this.linkUrl
      );
    },
  },
  data() {
    return {
      pageTitle: "",
      content: "",
      linkText: "",
      linkUrl: "",
      published: true,
    };
  },
  methods: {
    submitForm() {
      if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
        alert("please fill out form");
        return;
      }

      this.$emit("pageCreated", {
        pageTitle: this.pageTitle,
        content: this.pageContent,
        link: {
          text: this.linkText,
          url: this.linkUrl,
        },
        published: this.published,
      });

      this.pageTitle = "";
      this.content = "";
      this.linkText = "";
      this.linkUrl = "";
      this.published = true;
    },
  },
  watch: {
    pageTitle(newTitle, oldTitle) {
      if (this.linkText == oldTitle) {
        this.linkText = newTitle;
        console.log("if");
      } else {
        console.log("else");
      }
    },
  },
};
</script>
