import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Linproducts from '@/components/Linproducts'
import Benproducts from '@/components/Benproducts'
import Hotsale from '@/components/Hotsale'
import Company from '@/components/Company'
import Contact from '@/components/Contact'
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
        path: '/hotsale',
        name: 'Hotsale',
        component: Hotsale
    },
    {
        path: '/linproducts',
        name: 'Linproducts',
        component: Linproducts
    },
    {
        path: '/company',
        name: 'Company',
        component: Company
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: Product
    }
  ]
})
