module.exports = [
    {
        code: 'oms', title: '统一运营后台', permissions: ['get'],
        children: [
            {
                code: 'nav', title: '后台菜单', permissions: ['get'],
                children: [
                    {
                        code: 'nav_acl', title: '权限管理', permissions: ['get'],
                        children: [
                            {code: 'nav_acl_org', title: '组织管理', permissions: ['get']},
                            {code: 'nav_acl_role', title: '角色管理', permissions: ['get']}
                        ]
                    }
                ]
            },
            {
           
                title: '玩家管理',
                code: 'nav_player_manage',
                permissions:  ['get','post','delete'],
                children: [
                    {title: '玩家信息',code: 'nav_player_info',permissions:  ['get','post','delete']},
                    {title: '在线状态', code: 'nav_player_online',permissions:  ['get','post','delete']},
                    {title: '游戏记录',code: 'nav_player_record',permissions:  ['get','post','delete']},
                    {title: '赠送记录',code: 'nav_player_givelog',permissions:  ['get','post','delete']}
                    ]
            },
            {code: '/admin/nav', title: '总后台导航菜单', permissions: ['get']},
            {code: '/admin/navconfig', title: '配置导航菜单', permissions: ['get', 'post']},
            {code: '/admin/currencys', title: '币种配置', permissions: ['get', 'post', 'delete']},
            {code: '/admin/rates', title: '汇率配置', permissions: ['get', 'post', 'delete']},
            {code: '/admin/systeminit', title: '系统初始化配置', permissions: ['get', 'post', 'delete']},
            {code: '/admin/system/init', title: '执行系统初始化', permissions: ['post']},
            {code: '/admin/systemconfig', title: '执行系统配置', permissions: ['post']},
            {code: '/admin/cfg', title: '统一配置', permissions: ['get', 'post']}
        ]
    }
];

