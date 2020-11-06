import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout/layout.vue'

Vue.use(VueRouter)

const routes = [{

        path: '',
        name: 'layout',
        component: layout,
        children: [{
                path: '/',
                name: 'Home',
                component: Home,
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/quit',
                name: 'quit',
                component: () =>
                    import ('../views/quit/quit.vue'),
                meta: {
                    title: '退出'
                }
            },
            {
                path: '/upload',
                name: 'upload',
                component: () =>
                    import ('../views/upload/upload.vue'),
                meta: {
                    title: '图片上传'
                }
            },
            {
                path: '/label',
                name: 'label',
                component: () =>
                    import ('../views/label/label.vue'),
                meta: {
                    title: '标签页 '
                }
            },
            {
                path: '/export',
                name: 'export',
                component: () =>
                    import ('../views/export/export.vue'),
                meta: {
                    title: '导出excel'
                }
            },
            {
                path: '/postarticles',
                name: 'postarticles',
                component: () =>
                    import ('../views/postarticles/postarticles.vue'),
                meta: {
                    title: '发表文章'
                }
            },
            {
                path: '/statistics',
                name: 'statistics',
                component: () =>
                    import ('../views/statistics/statistics.vue'),
                meta: {
                    title: '统计'
                }
            },
            {
                path: '/published',
                name: 'published',
                component: () =>
                    import ('../views/published/published.vue'),
                meta: {
                    title: '已发布'
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/login.vue'),
        meta: {
            title: '登录页'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/login/register.vue'),
        meta: {
            title: '注册页'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    let user = sessionStorage.getItem('user')
    if (to.path === '/login' || to.path === '/register') next()
    else user ? next() : (next('/login') || next('/register'))
})
export default router