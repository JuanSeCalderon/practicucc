import Vue from 'vue';
import App from './App.vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


Vue.config.productionTip = false;
Vue.component('menu-icon', MenuIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

class Slider {
  constructor(selector, movimiento = true) {
    this.move = this.move.bind(this);
    this.moveByButton = this.moveByButton.bind(this);
    this.slider = document.querySelector(selector);
    this.itemsCount = this.slider.querySelectorAll('.container > *').length;
    this.interval = null;
    this.contador = 0;
    this.movimiento = movimiento;

    this.start();
    this.buildControls();
    this.bindEvents();
  }
}
