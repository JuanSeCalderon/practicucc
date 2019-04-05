import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import store from './vistas/store.js';
import Galeria from './vistas/Galeria.vue';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
    render: h => h(Galeria),
    store
}).$mount('#Galeria');


Vue.use(ElementUI);

Vue.config.productionTip = false;

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


