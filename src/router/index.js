import Vue from 'vue'
import VueRouter from 'vue-router'

//Site
import Index from 'Views/Index';
import Docs from 'Views/Docs';
import NotFound from 'Views/NotFound';


Vue.use(VueRouter);

let routes = [
    //Site
    {
        path: '',
        name: 'index',
        component: Index
    },
    {
        path: '/docs',
        name: 'docs',
        component: Docs
    },

    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});


export default router;
