import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Produk from "@/views/Produk.vue";
import Detail from "@/views/Detail.vue";
import Kategori from "@/views/Kategori.vue";
import DetailKategori from "@/views/DetailKategori.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import Todo from "../views/Todo.vue"

import Login from "@/views/Login.vue";
import Counter from "../components/Counter.vue"


const routes = [
    {   
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
        beforeEnter: (to, from, next) => {
            const loggedInUser = true;
            if (loggedInUser) {
                next();
                this.$router.push('/produk')
            } else {
                next("/login");
            }
        },
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
    },
    {
        path: "/DetailKategori/id_kategori",
        name: "DetailKategori",
        component: DetailKategori,
        props: true
    },
    {
        path: "/detail/:id_produk",
        name: "Detail",
        component: Detail,
        props: true
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        props: true
    },
    {
        path: "/counter",
        name: "Counter",
        component: Counter,
    },
    {
        path: "/todo",
        name: "Todo",
        component: Todo,
    },
    { path: '/:pathMatch(.*)*', component: PageNotFound },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;