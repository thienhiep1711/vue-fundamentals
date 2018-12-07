import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import User from "./views/User.vue";
import UserStart from "./components/user/UserStart.vue";
import UserEdit from "./components/user/UserEdit.vue";
import UserDetail from "./components/user/UserDetail.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selecter: to.hash };
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/user",
      name: "user",
      component: User,
      children: [
        { path: "", component: UserStart },
        { path: ":id", component: UserDetail },
        { path: ":id/edit", component: UserEdit }
      ]
    },
    {
      path: "/redirect-me",
      redirect: {
        name: "home"
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

export default router;
