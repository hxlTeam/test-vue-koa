import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

const isProduction = process.env.VUE_APP_MODE === 'production';
router.beforeEach((to, from, next) => {
  isProduction && axios.get('versions.json')
    .then(e => {
      let versions = e.data.versions;
      console.log(versions);
      console.log(localStorage.versions);
      if(versions !== +localStorage.versions){
        localStorage.versions = versions;
        window.location.reload();
      }

    })
    .catch(err => {
      console.log(err.message);
    })
  next();
});

export default router
