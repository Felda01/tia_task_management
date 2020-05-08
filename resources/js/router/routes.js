import VueRouterMultiguard from 'vue-router-multiguard';
import store from '../store/index';


const auth = (to, from ,next) => {
    if (!store.state.token) next({ name: 'login', query: { redirect: to.fullPath } });
    else next();
};

const guest = (to, from, next) => {
    if (store.state.token) next({ name: 'dashboard' });
    else next();
};


function page (path) {
    return () => import('../pages/' + path).then(m => m.default || m);
}

export default [
    { path: '/', name: 'login', component: page('auth/Login.vue'), beforeEnter: VueRouterMultiguard([guest]) },
    { path: '/dashboard', name: 'dashboard', component: page('Dashboard.vue'), beforeEnter: VueRouterMultiguard([auth]) },

    { path: '/password/reset', name: 'password.request', component: page('auth/password/Email.vue'), beforeEnter: VueRouterMultiguard([guest]) },
    { path: '/password/reset/:token/:email', name: 'password.reset', component: page('auth/password/Reset.vue'), beforeEnter: VueRouterMultiguard([guest]) },

    { path: '/clients', name: 'clients', component: page('client/ClientList.vue'), beforeEnter: VueRouterMultiguard([auth]) },
    { path: '/clients/:id', name: 'clients.show', component: page('client/ClientDetail.vue'), beforeEnter: VueRouterMultiguard([auth]) },

    { path: '/projects/:slug', name: 'projects.show', component: page('project/ProjectDetail.vue'), beforeEnter: VueRouterMultiguard([auth]) },
    { path: '/projects/:slug/roadmap', name: 'projects.show.roadmap', component: page('project/RoadMap.vue'), beforeEnter: VueRouterMultiguard([auth]) },
    { path: '/projects/:slug/board', name: 'projects.show.board', component: page('project/Board.vue'), beforeEnter: VueRouterMultiguard([auth]) },
    { path: '/projects/:slug/gantt', name: 'projects.show.gantt', component: page('project/Gantt.vue'), beforeEnter: VueRouterMultiguard([auth]) },

    { path: '/tasks', name: 'tasks', component: page('task/TaskList.vue'), beforeEnter: VueRouterMultiguard([auth]) },
    { path: '/tasks/:id', name: 'tasks.show', component: page('task/TaskDetail.vue'), beforeEnter: VueRouterMultiguard([auth]) },

    { path: '/users', name: 'users', component: page('user/UserList.vue'), beforeEnter: VueRouterMultiguard([auth]) },
    { path: '/users/:id', name: 'users.show', component: page('user/UserDetail.vue'), beforeEnter: VueRouterMultiguard([auth]) },

    { path: '*', name: '404', component: page('errors/404.vue') }
];
