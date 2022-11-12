import Main from '@/components/main'
import Main2 from '@/components/main2'
// import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      notTab: true,
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          // access: [1, 2, 3, 4, 5],
          hideInMenu: true,
          title: '首页',
          notTab: true,
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      },
      {
        path: '/start-test',
        name: 'startTest',
        meta: {
          // access: [1, 2, 3, 4, 5],
          hideInMenu: true,
          title: '开始实验',
          notTab: true,
          notCache: true
        },
        component: () => import('@/view/single-page/start-test')
      },
      {
        path: '/practice',
        name: 'practice',
        meta: {
          // access: [1, 2, 3, 4, 5],
          hideInMenu: true,
          title: '课前练习',
          notTab: true,
          notCache: true
        },
        component: () => import('@/view/single-page/practice')
      },
      {
        path: '/task-center',
        name: 'taskCenter',
        meta: {
          // access: [1, 2, 3, 4, 5],
          hideInMenu: true,
          title: '任务中心',
          notTab: true,
          notCache: true
        },
        component: () => import('@/view/single-page/task-center')
      },
      {
        path: '/topic-selection',
        name: 'topicSelection',
        meta: {
          // access: [1, 2, 3, 4, 5],
          hideInMenu: true,
          title: '选题上报',
          notTab: true,
          notCache: true
        },
        component: () => import('@/view/single-page/topic-selection')
      },
      {
        path: '/resources-prepare',
        name: 'resourcesPrepare',
        meta: {
          // access: [1, 2, 3, 4, 5],
          hideInMenu: true,
          title: '资源准备',
          notTab: true,
          notCache: true
        },
        component: () => import('@/view/single-page/resources-prepare')
      },
      {
        path: '/material-prepare',
        name: 'materialPrepare',
        meta: {
          // access: [1, 2, 3, 4, 5],
          hideInMenu: true,
          title: '素材准备',
          notTab: true,
          notCache: true
        },
        component: () => import('@/view/single-page/material-prepare')
      },
      {
        path: '/work-production',
        name: 'WorkProduction',
        meta: {
          // access: [1, 2, 3, 4, 5],
          hideInMenu: true,
          title: '作品生产',
          notTab: true,
          notCache: true
        },
        component: () => import('@/view/single-page/work-production')
      },
      {
        path: '/work-review',
        name: 'WorkReview',
        meta: {
          // access: [1, 2, 3, 4, 5],
          hideInMenu: true,
          title: '作品审核',
          notTab: true,
          notCache: true
        },
        component: () => import('@/view/single-page/work-review')
      },
      {
        path: '/work-detail',
        name: 'WorkDetail',
        meta: {
          // access: [1, 2, 3, 4, 5],
          hideInMenu: true,
          title: '待审核',
          notTab: true,
          notCache: true
        },
        component: () => import('@/view/single-page/work-review/workDetail.vue')
      },
      {
        path: '/exhibition-evaluate',
        name: 'ExhibitionEvaluate',
        meta: {
          // access: [1, 2, 3, 4, 5],
          hideInMenu: true,
          title: '作品展示与互评',
          notTab: true,
          notCache: true
        },
        component: () => import('@/view/single-page/exhibition-evaluate')
      },
      {
        path: '/download-report',
        name: 'DownloadReport',
        meta: {
          // access: [1, 2, 3, 4, 5],
          hideInMenu: true,
          title: '实验报告',
          notTab: true,
          notCache: true
        },
        component: () => import('@/view/single-page/download-report')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/home',
    component: Main2,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/admin/home',
        name: 'adminHome',
        meta: {
          access: [1, 2, 4],
          hideInMenu: true,
          title: '首页',
          notCache: true
        },
        component: () => import('@/view/admin-page/home')
      }
    ]
  },
  {
    path: '/user-menu',
    name: 'usermenu',
    component: Main2,
    meta: {
      icon: 'logo-buffer',
      title: '用户管理'
    },
    children: [
      {
        path: 'user',
        name: 'user',
        meta: {
          access: [1, 2, 4],
          icon: 'logo-buffer',
          title: '用户列表',
          notCache: true
        },
        component: () => import('@/view/admin-page/user/list.vue')
      }
    ]
  },
  {
    path: '/basic-data',
    name: 'basicData',
    component: Main2,
    meta: {
      icon: 'logo-buffer',
      title: '基础资料'
    },
    children: [
      {
        path: 'material-upload',
        name: 'MaterialUpload',
        meta: {
          access: [1, 2, 4],
          icon: 'logo-buffer',
          title: '素材上传',
          notCache: true
        },
        component: () => import('@/view/admin-page/material-upload/index.vue')
      },
      {
        path: 'question-bank',
        name: 'questionBank',
        meta: {
          access: [1, 2, 4],
          icon: 'logo-buffer',
          title: '题库',
          notCache: true
        },
        component: () => import('@/view/admin-page/question-bank/index.vue')
      }
    ]
  },
  // {
  //   path: '/update',
  //   name: 'update',
  //   meta: {
  //     icon: 'md-cloud-upload',
  //     title: '数据上传'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'update_table_page',
  //       name: 'update_table_page',
  //       meta: {
  //         icon: 'ios-document',
  //         title: '上传Csv'
  //       },
  //       component: () => import('@/view/update/update-table.vue')
  //     },
  //     {
  //       path: 'update_paste_page',
  //       name: 'update_paste_page',
  //       meta: {
  //         icon: 'md-clipboard',
  //         title: '粘贴表格数据'
  //       },
  //       component: () => import('@/view/update/update-paste.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/excel',
  //   name: 'excel',
  //   meta: {
  //     icon: 'ios-stats',
  //     title: 'EXCEL导入导出'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'upload-excel',
  //       name: 'upload-excel',
  //       meta: {
  //         icon: 'md-add',
  //         title: '导入EXCEL'
  //       },
  //       component: () => import('@/view/excel/upload-excel.vue')
  //     },
  //     {
  //       path: 'export-excel',
  //       name: 'export-excel',
  //       meta: {
  //         icon: 'md-download',
  //         title: '导出EXCEL'
  //       },
  //       component: () => import('@/view/excel/export-excel.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/tools_methods',
  //   name: 'tools_methods',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'tools_methods_page',
  //       name: 'tools_methods_page',
  //       meta: {
  //         icon: 'ios-hammer',
  //         title: '工具方法',
  //         beforeCloseName: 'before_close_normal'
  //       },
  //       component: () => import('@/view/tools-methods/tools-methods.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/i18n',
  //   name: 'i18n',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'i18n_page',
  //       name: 'i18n_page',
  //       meta: {
  //         icon: 'md-planet',
  //         title: 'i18n - {{ i18n_page }}'
  //       },
  //       component: () => import('@/view/i18n/i18n-page.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/error_store',
  //   name: 'error_store',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'error_store_page',
  //       name: 'error_store_page',
  //       meta: {
  //         icon: 'ios-bug',
  //         title: '错误收集'
  //       },
  //       component: () => import('@/view/error-store/error-store.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/error_logger',
  //   name: 'error_logger',
  //   meta: {
  //     hideInBread: true,
  //     hideInMenu: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'error_logger_page',
  //       name: 'error_logger_page',
  //       meta: {
  //         icon: 'ios-bug',
  //         title: '错误收集'
  //       },
  //       component: () => import('@/view/single-page/error-logger.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/directive',
  //   name: 'directive',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'directive_page',
  //       name: 'directive_page',
  //       meta: {
  //         icon: 'ios-navigate',
  //         title: '指令'
  //       },
  //       component: () => import('@/view/directive/directive.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/multilevel',
  //   name: 'multilevel',
  //   meta: {
  //     icon: 'md-menu',
  //     title: '多级菜单'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'level_2_1',
  //       name: 'level_2_1',
  //       meta: {
  //         icon: 'md-funnel',
  //         title: '二级-1'
  //       },
  //       component: () => import('@/view/multilevel/level-2-1.vue')
  //     },
  //     {
  //       path: 'level_2_2',
  //       name: 'level_2_2',
  //       meta: {
  //         access: [1, 2, 3, 4, 5],
  //         icon: 'md-funnel',
  //         showAlways: true,
  //         title: '二级-2'
  //       },
  //       component: parentView,
  //       children: [
  //         {
  //           path: 'level_2_2_1',
  //           name: 'level_2_2_1',
  //           meta: {
  //             icon: 'md-funnel',
  //             title: '三级'
  //           },
  //           component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
  //         },
  //         {
  //           path: 'level_2_2_2',
  //           name: 'level_2_2_2',
  //           meta: {
  //             icon: 'md-funnel',
  //             title: '三级'
  //           },
  //           component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
  //         }
  //       ]
  //     },
  //     {
  //       path: 'level_2_3',
  //       name: 'level_2_3',
  //       meta: {
  //         icon: 'md-funnel',
  //         title: '二级-3'
  //       },
  //       component: () => import('@/view/multilevel/level-2-3.vue')
  //     }
  //   ]
  // },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
