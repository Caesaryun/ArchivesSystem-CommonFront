import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
/**
 *  配置滚动条的位置
 *  通过这个这个属性（是个函数），可以让应用像浏览器的原生表现那样，在按下 后退/前进 按钮时，简单地让页面滚动到顶部或原来的位置。
 */
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        return {x: 0, y: 0}
    }
}
/**
 *  路由配置
 *  @mode: 配置路由模式（"hash" | "history" | "abstract"）
 *  @base: 如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。
 *  @linkActiveClass: 点击触发的class
 *  @scrollBehavior: 配置滚动条的位置
 */
const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    likActiveClass: 'link-active',
    scrollBehavior,
    routes: [
        {
            path: '/',
            redirect: '/main_show'  // 路径 / 定向于 main_show
        }, {
            path: '/login',
            component: resolve => require.ensure([], () => resolve(require('@/components/page/login')), 'login'),
            meta: {title: '登录'},
        },
		{
			path: '/register',
			component: resolve => require.ensure([], () => resolve(require('../components/page/register.vue')), 'register'),
			meta: {title: '注册'},
		},
		{
			path: '/high_search',
			component: resolve => require.ensure([], () => resolve(require('../views/high_level_search.vue')), 'high_search'),
			meta: {title: '高级搜索'},
		},
		{
			path: '/arch_detail',
			component: resolve => require.ensure([], () => resolve(require('../views/arch_detail.vue')), 'arch_detail'),
			meta: {title: '详情'},
		},
		{
			  //主要展示的页面
			  path: '/main_show',
			  component: resolve => require.ensure([], () => resolve(require('../views/mainshow.vue')), 'main_show'),
			  meta: {title: '主页'},
		},
		{
            path: '*',
            component: resolve => require.ensure([], () => resolve(require('@/components/page/404')), 'error'),
            meta: {title: '404'},
        }, {
            path: '/',
            component: resolve => require.ensure([], () => resolve(require('@/components/layout/init')), 'home'),
            meta: {title: '初始化组件'},
            children: [
                {
                    path: '/home',
                    component: resolve => require(['../components/page/home.vue'], resolve),
                    meta: {
                        title: '后台首页',
                        requireAuth:true //表示需要登陆后才能查看 与 permission.js遥相呼应
                     }
                }, {
                    path: '/403',
                    component: resolve => require.ensure([], () => resolve(require('@/components/page/403')), 'error'),
                    meta: {title: '403'},
                },
                {
                    path: '/test',
                    component: resolve => require(['../components/page/Test.vue'], resolve),
                    meta: {title: 'Test'},
                },
             {
                path: '/borrow',
                component: resolve => require(['../views/arch_borrow.vue'], resolve),
                meta: {title: '借阅档案',
				       requireAuth:true //表示需要登陆后才能查看
				},
              },
			  {
			     path: '/arch_order',
			     component: resolve => require(['../views/arch_order.vue'], resolve),
			     meta: {title: '预约档案',
			  				       requireAuth:true //表示需要登陆后才能查看
			  				},
			   },
              {
			     path: '/archs_data',
			     component: resolve => require(['../views/archs_data.vue'], resolve),
			     meta: {title: '档案条目',
			  				       requireAuth:true //表示需要登陆后才能查看
			  				},
			   },
			   {
			      path: '/userInfo',
			      component: resolve => require(['../views/userinfo.vue'], resolve),
			      meta: {title: '信息管理',
			   				       requireAuth:true //表示需要登陆后才能查看
			   				},
			    },
				{
				   path: '/contact',
				   component: resolve => require(['../views/contact.vue'], resolve),
				   meta: {title: '交流中心',
								       requireAuth:true //表示需要登陆后才能查看
								},
				 },
				
            ]
        }
    ]
})
/**
 *  修改网站title的值
 */
router.afterEach((transition) => {
    if (transition.meta.title) {
        document.title = transition.meta.title
    }
})


/**
 * 路由拦截器
 * 用钩子函数对路由进行权限跳转
 * 1.判断该路由是否需要登录权限
 * 2.通过vuex state获取当前的token是否存在
 * 3.将跳转的路由path作为参数，登录成功后跳转到该路由
 */
// router.beforeEach((to, from, next) => {
//     const role = localStorage.getItem('ms_username');
//     if (!role && to.path !== '/login') {
//         next('/login');
//     } else if (to.meta.permission) {
//         // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//         role === 'admin' ? next() : next('/403');
//     } else {
//         // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//         if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
//             Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//                 confirmButtonText: '确定'
//             });
//         } else {
//             next();
//         }
//     }
// })
/**
 * 路由输出
 */
export default router
