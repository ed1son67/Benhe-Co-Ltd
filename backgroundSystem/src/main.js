// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'iview/dist/styles/iview.css';
import './theme/theme.less';
import {Notice, BreadcrumbItem, Breadcrumb, Poptip, Page, Upload, Option, Select, Row, Col, Submenu, Button, Radio, RadioGroup, Input, Icon, Form, FormItem,Layout,Menu,Sider,MenuItem } from 'iview';

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

Vue.prototype.$Notice = Notice;



Vue.prototype.oss = 'http://benhe.oss-cn-shenzhen.aliyuncs.com/';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  render: h => h(App)
})

// router.beforeEach((to, from, next) => {
//     // Login Verification
//     console.log(to.name);
//     console.log(store.state.isLogin)
//     if (store.state.isLogin != true ) {
//         next(false)
//     } else {
//         next()
//     }
// });