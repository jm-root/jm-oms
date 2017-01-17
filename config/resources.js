module.exports = [
    {
        code: 'oms', title: '统一运营后台', permissions: ['get'],
        children: [{
            code: 'nav', title: '后台菜单', permissions: ['get'],
            children: [
                {
                    title: '权限管理',
                    code: 'nav_acl',
                    permissions: ['get'],
                    children: [

                        {
                            title: '用户管理',
                            code: 'nav_user_manage',
                            permissions: ['get']
                        },
                        {
                            title: '角色管理',
                            code: 'nav_role_manage',
                            permissions: ['get']
                        },
                        {
                            title: '资源管理',
                            code: 'nav_resource_manage',
                            permissions: ['get']
                        },
                        {
                            title: '角色用户',
                            code: 'nav_role_user',
                            permissions: ['get']
                        }
                    ]
                },
                {
                    title: '配置管理',
                    code: 'nav_config',
                    permissions: ['get'],
                    children: [
                        {
                            title: '菜单配置',
                            code: 'nav_config_menus',
                            permissions: ['get']
                        },
                        {
                            title: '系统初始化',
                            code: 'nav_config_systeminit',
                            permissions: ['get']
                        },
                        {
                            title: '系统配置',
                            code: 'nav_config_systemconfig',
                            permissions: ['get']
                        },
                        {
                            title: '统一配置',
                            code: 'nav_config_unified',
                            permissions: ['get']
                        }
                    ]
                }
            ]
            }
        ]
    }
];

