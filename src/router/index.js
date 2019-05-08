import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Inicio from '../vistas/Inicio';
import Contacto from '../vistas/Contacto';
import Eventos from '../vistas/Eventos';
import Galeria from '../vistas/Galeria';
//import cotizacion from '../vistas/cotizacion';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
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
		//	{
		//path: '/cotizacion',
		//	name: 'cotizacion',
		//	component: Galeria
		//	}
	]
});
