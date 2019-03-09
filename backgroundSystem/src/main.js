// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css';
import './theme/theme.less';
import { Submenu, Button, Table, Input, Icon, Form, FormItem,Layout,Menu,Sider,MenuItem } from 'iview';

Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Input', Input);
Vue.component('Icon', Icon);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Layout', Layout);
Vue.component('Menu', Menu);
Vue.component('Sider', Sider);
Vue.component('MenuItem', MenuItem);
Vue.component('Submenu', Submenu);





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
