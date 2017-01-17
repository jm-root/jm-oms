module.exports = {

    nav_acl:
    {
        "code": "nav_acl",
        "title": "权限管理",
        "icon": "icon-settings",
        "active": "app.per",
        "children":[
            {
                "code": "nav.acl.user.manage",
                "title": "用户管理",
                "icon": "icon-user",
                "translate": "nav.USER_MANAGE",
                "active": "app.per.users",
                "uisref": "app.per.users.list"
            },
            {
                "code": "nav_acl_role_manage",
                "title": "角色管理",
                "icon": "icon-people",
                "translate": "nav.ROLE_MANAGE",
                "uisref": "app.per.role"
            },
            {

                "code": "nav_acl_resource_manage",
                "title": "资源管理",
                "icon": "icon-star",
                "translate": "nav.RESOURCE_MANAGE",
                "uisref": "app.per.resource"
            }
        ]
    },


nav_config: {
        "code": "nav_config",
        "title": "配置管理",
        "icon": "icon-settings",
        "translate": "nav.CONFIG_MANAGE",
        "active": "app.config",
        "children":[
            {
                "code": "nav_config_unified",
                "title": "统一配置",
                "icon": "icon-puzzle",
                "translate": "nav.CONFIG_UNIFIED",
                "uisref": "app.config.unified"
            }
        ]
    }
}