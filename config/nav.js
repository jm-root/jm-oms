module.exports = [

    {
        "code": "nav.acl",
        "title": "权限管理",
        "icon": "icon-settings",
        "active": "app.per",
        "children":[
            {
                "code": "nav.acl.user",
                "title": "用户管理",
                "icon": "icon-user",
                "active": "app.per.users",
                "uisref": "app.per.users.list"
            },
            {
                "code": "nav.acl.role",
                "title": "角色管理",
                "icon": "icon-people",
                "uisref": "app.per.role"
            },
            {

                "code": "nav.acl.resource",
                "title": "资源管理",
                "icon": "icon-star",
                "uisref": "app.per.resource"
            }
        ]
    },


 {
        "code": "nav.config",
        "title": "配置管理",
        "icon": "icon-settings",
        "active": "app.config",
        "children":[
            {
                "code": "nav.config.unified",
                "title": "统一配置",
                "icon": "icon-puzzle",
                "uisref": "app.config.unified"
            }
        ]
    }
]