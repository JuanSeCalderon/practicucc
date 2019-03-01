import Vue from 'vue';
import Router from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';



import Inicio from '../vistas/Inicio';
import Contacto from '../vistas/Contacto';
import Eventos from '../vistas/Eventos';
import Galeria from '../vistas/Galeria';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Inicio',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/Contacto',
      name: 'Contacto',
      component: Contacto
    },
    {
      path: '/Eventos',
      name: 'Eventos',
      component: Eventos
    },
    {
      path: '/Galeria',
      name: 'Galeria',
      component: Galeria
    }
  ]
});
