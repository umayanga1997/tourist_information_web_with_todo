import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ToDo from '../views/ToDo.vue'
import SignInUp from '../views/SignInUp.vue'
import ContactUs from '../views/Contact_Us.vue'
import Places from '../views/Places.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        props: true,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        props: true,
    },
    {
        path: '/todo',
        name: 'ToDo',
        component: ToDo,
        props: true,
    },
    {
        path: '/sign_in_up',
        name: 'SignInUp',
        component: SignInUp,
        props: true,
    },
    {
        path: '/contact_us',
        name: 'ContactUs',
        component: ContactUs,
        props: true,
    },
    {
        path: '/places',
        name: 'Places',
        component: Places,
        props: true,
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router