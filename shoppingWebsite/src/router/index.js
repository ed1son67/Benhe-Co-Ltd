import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Linproducts from '@/components/Linproducts'
import Benproducts from '@/components/Benproducts'

import Product from '@/components/Product'


// import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: 'index'
    },
    {
        path: '/index',
        name: 'Index',
        component: Index
    },
    {
        path: '/benproducts',
        name: 'Benproducts',
        component: Benproducts
    },
    {
        path: '/linproducts',
        name: 'Linproducts',
        component: Linproducts
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: Product
    },
    {
        path: '/linproducts/:id',
        name: 'Linproducts',
        component: Product
    },
    {
        path: '/benproducts/:id',
        name: 'Benproducts',
        component: Product
    },
  ]
})
