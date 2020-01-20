/*Importacion de componentes que son llamados por el router*/
/*import Tasks from 'components/Task/Tasks.vue'
import Dashboard from 'components/Dashboard.vue'
import TaskDetails from 'components/Task/TaskDetails.vue'
import ErrorNotFound from 'components/errors/NotFound.vue'*/
import ExampleComponent from '../components/ExampleComponent.vue'
import login from '../components/auth/login/login.vue'
import register from '../components/auth/register/register.vue'

export default [
    {
        path: '/',
        component: ExampleComponent
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    },

/*  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/tasks',
    component: Tasks,
    children: [
      {
        path: '',
        component : {
          template: '<h2>Selecciona una tarea</h2>',
        }
      },
      {
        path: ':id',
        component: TaskDetails,
        props: true
      },
    ],
  },
  {
    path : '/404',
    component: ErrorNotFound
  }*/
];
