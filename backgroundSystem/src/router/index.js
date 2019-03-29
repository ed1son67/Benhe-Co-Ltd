import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Index from '@/components/Index';
import UploadCN from '@/components/UploadCN';
import UploadEN from '@/components/UploadEN';
import Banner from '@/components/Banner';
import Productscn from '@/components/Productscn';
import Productsen from '@/components/Productsen';
import Detail from '@/components/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/index',
        name: 'Index',
        component: Index,
        children: [
            {
                path: 'banner',
                name: 'Banner',
                component: Banner,
            },
            {
                path: 'uploadcn',
                name: 'Uploadcn',
                component: UploadCN,
            },
            {
                path: 'uploaden',
                name: 'Uploaden',
                component: UploadEN,
            },
            {
                path: 'productscn',
                name: 'Productscn',
                component: Productscn,
                
            },
            {
                path: 'productsen',
                name: 'Productsen',
                component: Productsen,
            },
            {
                path: 'detail/:id',
                name: 'Detail',
                component: Detail,
            }
        ]
    }
  ]
});
