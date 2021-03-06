// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'iview/dist/styles/iview.css';
import './theme/theme.less';
import {Content, Modal, Notice, BreadcrumbItem, Breadcrumb, Poptip, Page, Upload, Option, Select, Row, Col, Submenu, Button, Radio, RadioGroup, Input, Icon, Form, FormItem,Layout,Menu,Sider,MenuItem } from 'iview';

Vue.component('Button', Button);
Vue.component('Radio', Radio);
Vue.component('Input', Input);
Vue.component('Icon', Icon);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Layout', Layout);
Vue.component('Menu', Menu);
Vue.component('Sider', Sider);
Vue.component('MenuItem', MenuItem);
Vue.component('Submenu', Submenu);
Vue.component('RadioGroup', RadioGroup);
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('Upload', Upload);
Vue.component('Page', Page);
Vue.component('Poptip', Poptip);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('BreadcrumbItem', BreadcrumbItem);
Vue.component('Modal', Modal);
Vue.component('Content', Content);

Vue.prototype.$Notice = Notice;

Vue.prototype.oss = 'http://benhe.oss-cn-shenzhen.aliyuncs.com/';

// 提示登陆身份过期
Vue.prototype.$loginTip = function() {
    this.$Notice.error({
        title: '登陆身份过期',
        desc: '请重新登陆'
    });
    setTimeout(() => {
        router.push('/login');
    }, 1000);
};

Vue.config.productionTip = false;

process.env.NODE_ENV === 'development' ? '/dist' : ''; 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  render: h => h(App)
})

router.beforeEach((to, from, next) => {
    if (store.state.isLogin != true ) {
        next(false);
    } else {
        next();
    }
});

