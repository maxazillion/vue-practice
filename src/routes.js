import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./views/PageViewer.vue";
import CreatePage from "./views/CreatePage.vue";
import ManagePages from "./views/ManagePages";
import PagesList from "./views/PagesList.vue";
import PageEdit from "./views/PageEdit";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/:index?", component: PageViewer, props: true }, // passes params as props
    {
      path: "/pages",
      component: ManagePages,
      children: [
        { path: "", component: PagesList },
        { path: "create", component: CreatePage },
        { path: ":index/edit", component: PageEdit, props: true },
      ],
    },
  ],
});

export default router;
