import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "../components/PageViewer.vue";
import CreatePage from "../components/CreatePage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/:index?", component: PageViewer, props: true }, // passes params as props
    { path: "/create", component: CreatePage },
  ],
});

export default router;
