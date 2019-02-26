import Vue from 'vue';
import Router from 'vue-router';

import Inicio from '../vistas/Inicio';
import Contacto from '../vistas/Contacto';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    }
  ]
});
