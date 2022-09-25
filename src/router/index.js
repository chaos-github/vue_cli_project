import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        name: 'home',
        component : ()=>  import('../components/introSec.vue')
    },
    {
        path:'/intro',
        name: 'Myresume',
        component : ()=>  import('../components/MyResume.vue'),
        children: [
            { path: 'introsec', 
              component: ()=>  import('../components/introSec.vue'),
            },
            { path: 'edusec', 
              component: ()=>  import('../components/educaSec.vue'),
            },
      
            // ...other sub routes
          ],
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router