import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./views/PageViewer.vue";
import CreatePage from "./views/CreatePage.vue";
import ManagePages from "./views/ManagePages";
import PagesList from "./views/PagesList.vue";
import PageEdit from "./views/PageEdit";
import GeeksForGeeksList from "./views/GeeksForGeeksList.vue";
import ViewGeeksForGeeksProblems from "./views/ViewGeeksForGeeksProblems.vue";
import ProblemsView from "./views/ProblemsView.vue";
import AboutMe from "./views/AboutMe.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/:index?", component: PageViewer, props: true }, // passes params as props
    { path: "/", component: AboutMe, props: true }, // passes params as props
    {
      path: "/pages",
      component: ManagePages,
      children: [
        { path: "", component: PagesList },
        { path: "create", component: CreatePage },
        { path: ":index/edit", component: PageEdit, props: true },
      ],
    },
    {
      path: "/problems",
      component: ProblemsView,
      children: [
        {
          path: "",
          component: GeeksForGeeksList,
          props: true,
        },
        {
          path: ":index/view",
          component: ViewGeeksForGeeksProblems,
          props: true,
        },
      ],
    }, // passes params as props
  ],
});

export default router;
