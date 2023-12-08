
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import ProductDetails from "./views/ProductDetails.vue";
import Orders from "./views/Orders.vue";
import Signup from "./views/Register.vue";
import Login from "./views/Auth.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin },
  { path: '/productDetails/:id', component: ProductDetails },
  { path: '/order', component: Orders },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router;