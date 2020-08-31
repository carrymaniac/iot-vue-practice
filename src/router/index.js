import VueRouter from 'vue-router';
import Main from '../page/Main'
import App from '../App'

const routes = [
    {
        path: '/',
        name: 'App',
        compoent:App,
        children: [
          {
             path: '/',
             component: Main
          }
    ]
    }
]

const router = new VueRouter(
    {
        mode:'hash',
        routes: routes
    }
)

export default router;