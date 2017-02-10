module.exports = [
    {
        "code": "app.acl.manage",
        "title": "权限管理",
        "icon": "icon-settings",
        "active": "app.acl",
        "children":[
            {
                "code": "app.acl.user",
                "title": "用户管理",
                "icon": "icon-user",
                "active": "app.acl.users",
                "uisref": "app.acl.users.list"
            },
            {
                "code": "app.acl.role",
                "title": "角色管理",
                "icon": "icon-user",
                "active": "app.acl.role",
                "uisref": "app.acl.role"
            },
            {

                "code": "app.acl.resource",
                "title": "资源管理",
                "icon": "icon-star",
                "active": "app.acl.resource",
                "uisref": "app.acl.resource"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "配置管理",
        "code": "app.config.manage",
        "active": "app.config",
        "children": [
            {
                "icon": "icon-puzzle",
                "title": "菜单配置",
                "code": "app.config.menus",
                "uisref": "app.config.menus"
            },
            {
                "icon": "icon-puzzle",
                "title": "系统初始化",
                "code": "app.config.systeminit",
                "uisref": "app.config.systeminit"
            },
            {
                "icon": "icon-puzzle",
                "title": "系统配置",
                "code": "app.config.systemconfig",
                "uisref": "app.config.systemconfig"
            },
            {
                "icon": "icon-puzzle",
                "title": "统一配置",
                "code": "app.config.unified",
                "uisref": "app.config.unified"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "系统管理",
        "code": "app.system.manage",
        "active": "app.system",
        "children": [
            {
                "icon": "icon-puzzle",
                "title": "管理员列表",
                "code": "app.system.admin",
                "uisref": "app.system.admin"
            },
            {
                "icon": "icon-puzzle",
                "title": "系统日志",
                "code": "app.system.log",
                "uisref": "app.system.log"
            }
        ]
    },
    {
        "code": "app.promote",
        "title": "推广地址",
        "icon": "glyphicon glyphicon-bullhorn",
        "active": "app.promote",
        "uisref": "app.promote"
    },
    {
        "code": "app.player.manage",
        "title": "玩家管理",
        "icon": "icon-settings",
        "active": "app.player",
        "children": [
            {
                "code": "app.player.info",
                "title": "玩家信息",
                "icon": "icon-puzzle",
                "active": "app.player.info",
                "uisref": "app.player.info.list"
            },
            {
                "code": "app.player.online",
                "title": "在线状态",
                "icon": "icon-puzzle",
                "uisref": "app.player.online"
            },
            {
                "code": "app.player.record",
                "title": "游戏记录",
                "icon": "icon-puzzle",
                "uisref": "app.player.record"
            },
            {
                "code": "app.player.givelog",
                "title": "赠送记录",
                "icon": "icon-puzzle",
                "uisref": "app.player.givelog"
            }
        ]
    },
    {
        "code": "app.recharge.manage",
        "title": "充值管理",
        "icon": "icon-settings",
        "active": "app.recharge",
        "children": [
            {
                "code": "app.recharge.cardtype",
                "title": "点卡类型",
                "icon": "icon-puzzle",
                "active": "app.recharge.cardtype",
                "uisref": "app.recharge.cardtype.list"
            },
            {
                "code": "app.recharge.card",
                "title": "官方点卡",
                "icon": "icon-puzzle",
                "active": "app.recharge.card",
                "uisref": "app.recharge.card.list"
            },
            {
                "code": "app.recharge.third",
                "title": "第三方充值",
                "icon": "icon-puzzle",
                "uisref": "app.recharge.third"
            },
            {
                "icon": "icon-puzzle",
                "title": "点卡充值记录",
                "code": "app.recharge.cardlog",
                "uisref": "app.recharge.cardlog"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "敏感词管理",
        "code": "app.wordfilter.manage",
        "active": "app.wordfilter",
        "children": [
            {
                "icon": "icon-puzzle",
                "title": "敏感词列表",
                "code": "app.wordfilter.list",
                "uisref": "app.wordfilter.list"
            },
            {
                "icon": "icon-puzzle",
                "title": "拦截日志",
                "code": "app.wordfilter.log",
                "uisref": "app.wordfilter.log"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "留言版管理",
        "code": "app.guestbook.manage",
        "active": "app.guestbook",
        "children": [
            {
                "icon": "icon-puzzle",
                "title": "留言版列表",
                "code": "app.guestbook.list",
                "uisref": "app.guestbook.list"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "大厅管理",
        "code": "app.home.manage",
        "active": "app.home",
        "children": [
            {
                "icon": "icon-settings",
                "title": "VIP配置",
                "code": "app.home.vip.config",
                "active": "app.home.vip",
                "children": [
                    {
                        "icon": " icon-puzzle",
                        "title": "VIP条件",
                        "code": "app.home.vip.cond",
                        "uisref": "app.home.vip.cond"
                    },
                    {
                        "icon": " icon-puzzle",
                        "title": "优惠种类",
                        "code": "app.home.vip.item",
                        "uisref": "app.home.vip.item"
                    },
                    {
                        "icon": " icon-puzzle",
                        "title": "分配优惠",
                        "code": "app.home.vip.set",
                        "uisref": "app.home.vip.set"
                    }
                ]
            },
            {
                "icon": "icon-settings",
                "title": "论坛管理",
                "code": "app.home.bbs.manage",
                "active": "app.home.bbs",
                "children": [
                    {
                        "icon": " icon-puzzle",
                        "title": "版块列表",
                        "code": "app.home.bbs.forum",
                        "active": "app.home.bbs.forum",
                        "uisref": "app.home.bbs.forum.list"
                    },
                    {
                        "icon": " icon-puzzle",
                        "title": "帖子列表",
                        "code": "app.home.bbs.topic",
                        "active": "app.home.bbs.topic",
                        "uisref": "app.home.bbs.topic.list"
                    }
                ]
            },
            {
                "icon": " icon-puzzle",
                "title": "活动列表",
                "code": "app.home.activitys",
                "active": "app.home.activitys",
                "uisref": "app.home.activitys.list"
            },
            {
                "icon": " icon-puzzle",
                "title": "签到设置",
                "code": "app.home.checkin",
                "active": "app.home.checkin",
                "uisref": "app.home.checkin.list"
            },
            {
                "icon": " icon-puzzle",
                "title": "发送公告",
                "code": "app.home.sendnotice",
                "uisref": "app.home.sendnotice"
            },
            {
                "icon": " icon-puzzle",
                "title": "发送邮件",
                "code": "app.home.senddak",
                "uisref": "app.home.senddak"
            },
            {
                "icon": " icon-puzzle",
                "title": "排行榜设置",
                "code": "app.home.rank",
                "uisref": "app.home.rank"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "活动管理",
        "code": "app.activity.manage",
        "active": "app.activity",
        "children": [
            {
                "icon": "icon-puzzle",
                "title": "道具列表",
                "code": "app.activity.prop",
                "active": "app.activity.prop",
                "uisref": "app.activity.prop.list"
            },
            {
                "icon": "icon-puzzle",
                "title": "分配道具",
                "code": "app.activity.gaveprop",
                "uisref": "app.activity.gaveprop"
            },
            {
                "icon": "icon-puzzle",
                "title": "活动版块",
                "code": "app.activity.forum",
                "active": "app.activity.forum",
                "uisref": "app.activity.forum.list"
            },
            {
                "icon": "icon-puzzle",
                "title": "活动列表",
                "code": "app.activity.list",
                "active": "app.activity.aty",
                "uisref": "app.activity.aty.list"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "论坛管理",
        "code": "app.bbs.manage",
        "active": "app.bbs",
        "children": [
            {
                "icon": " icon-puzzle",
                "title": "版块列表",
                "code": "app.bbs.forum",
                "active": "app.bbs.forum",
                "uisref": "app.bbs.forum.list"
            },
            {
                "icon": " icon-puzzle",
                "title": "帖子列表",
                "code": "app.bbs.topic",
                "active": "app.bbs.topic",
                "uisref": "app.bbs.topic.list"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "商城管理",
        "code": "app.shop.manage",
        "active": "app.shop",
        "children": [
            {
                "icon": "icon-puzzle",
                "title": "分类管理",
                "code": "app.shop.category",
                "active": "app.shop.category",
                "uisref": "app.shop.category.list"
            },
            {
                "icon": "icon-puzzle",
                "title": "产品品管理",
                "code": "app.shop.product",
                "active": "app.shop.product",
                "uisref": "app.shop.product.list"
            },
            {
                "icon": "icon-puzzle",
                "title": "订单管理",
                "code": "app.shop.order",
                "active": "app.shop.order",
                "uisref": "app.shop.order.list"
            },
            {
                "icon": "icon-puzzle",
                "title": "夺宝管理",
                "code": "app.shop.lottery",
                "active": "app.shop.lottery",
                "uisref": "app.shop.lottery.list"
            },
            {
                "icon": "icon-puzzle",
                "title": "抽奖管理",
                "code": "app.shop.bet",
                "active": "app.shop.bet",
                "uisref": "app.shop.bet.list"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "应用管理",
        "code": "app.app.manage",
        "active": "app.apps",
        "children": [
            {
                "icon": " icon-puzzle",
                "title": "应用列表",
                "code": "app.app.create",
                "active": "app.apps.manage",
                "uisref": "app.apps.manage"
            },
            {
                "icon": " icon-puzzle",
                "title": "应用上传",
                "code": "app.app.upload",
                "active": "app.apps.upload",
                "uisref": "app.apps.upload"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "房间管理",
        "code": "app.room.manage",
        "active": "app.rooms",
        "uisref": "app.rooms.manage"
    },
    {
        "icon": "icon-settings",
        "title": "包管理",
        "code": "app.package.manage",
        "active": "app.package",
        "children": [
            {
                "icon": "icon-puzzle",
                "title": "领包",
                "code": "app.package.take",
                "uisref": "app.package.take"
            },
            {
                "icon": "icon-puzzle",
                "title": "包设置",
                "code": "app.package.set",
                "uisref": "app.package.set"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "渠道管理",
        "code": "app.agent.manage",
        "active": "app.agent",
        "children": [
            {
                "icon": "icon-puzzle",
                "title": "下级渠道创建",
                "code": "app.agent.create",
                "uisref": "app.agent.create"
            },
            {
                "icon": "icon-puzzle",
                "title": "渠道列表",
                "code": "app.agent.list",
                "uisref": "app.agent.list"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "渠道数据",
        "code": "app.agent.data",
        "active": "app.agentdata",
        "children": [
            {
                "icon": "icon-puzzle",
                "title": "注册",
                "code": "app.agentdata.register",
                "uisref": "app.agentdata.register"
            },
            {
                "icon": "icon-puzzle",
                "title": "充值",
                "code": "app.agentdata.recharge",
                "uisref": "app.agentdata.recharge"
            },
            {
                "icon": "icon-puzzle",
                "title": "数据分析",
                "code": "app.agentdata.analysis",
                "uisref": "app.agentdata.analysis"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "T币系统",
        "code": "app.coin.sys",
        "active": "app.coin",
        "children": [
            {
                "icon": "icon-settings",
                "title": "T币库存",
                "code": "app.coin.stock",
                "active": "app.coin.stock",
                "children": [
                    {
                        "icon": "icon-puzzle",
                        "title": "T币充值",
                        "code": "app.coin.stock.recharge",
                        "uisref": "app.coin.stock.recharge"
                    },
                    {
                        "icon": "icon-puzzle",
                        "title": "库存列表",
                        "code": "app.coin.stock.list",
                        "uisref": "app.coin.stock.list"
                    },
                    {
                        "icon": "icon-puzzle",
                        "title": "订单管理",
                        "code": "app.coin.stock.order",
                        "uisref": "app.coin.stock.order"
                    }
                ]
            },
            {
                "icon": "icon-settings",
                "title": "T币分发",
                "code": "app.coin.distribute",
                "active": "app.coin.distribute",
                "children": [
                    {
                        "icon": "icon-puzzle",
                        "title": "生成首充号",
                        "code": "app.coin.distribute.make",
                        "uisref": "app.coin.distribute.make"
                    },
                    {
                        "icon": "icon-puzzle",
                        "title": "批量分发",
                        "code": "app.coin.distribute.batch",
                        "uisref": "app.coin.distribute.batch"
                    }
                ]
            },
            {
                "icon": "icon-settings",
                "title": "账号管理",
                "code": "app.coin.account",
                "active": "app.coin.account",
                "children": [
                    {
                        "icon": "icon-puzzle",
                        "title": "账号列表",
                        "code": "app.coin.account.list",
                        "uisref": "app.coin.account.list"
                    }
                ]
            },
            {
                "icon": "icon-settings",
                "title": "使用记录",
                "code": "app.coin.record",
                "active": "app.coin.record",
                "children": [
                    {
                        "icon": "icon-puzzle",
                        "title": "玩家账号统计",
                        "code": "app.coin.record.playerStat",
                        "uisref": "app.coin.record.playerStat"
                    },
                    {
                        "icon": "icon-puzzle",
                        "title": "渠道账号统计",
                        "code": "app.coin.record.agentStat",
                        "uisref": "app.coin.record.agentStat"
                    },
                    {
                        "icon": "icon-puzzle",
                        "title": "日志查询",
                        "code": "app.coin.record.logs",
                        "uisref": "app.coin.record.logs"
                    }
                ]
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "统计报表",
        "code": "app.report",
        "active": "app.report",
        "children": [
            {
                "icon": "icon-puzzle",
                "title": "账目统计",
                "code": "app.report.account",
                "uisref": "app.report.account"
            }
        ]
    },
    {
        "icon": "icon-settings",
        "title": "银行管理",
        "code": "app.bank.manage",
        "active": "app.bank",
        "children": [
            {
                "icon": " icon-puzzle",
                "title": "账户列表",
                "code": "app.bank.account",
                "uisref": "app.bank.account"
            },
            {
                "icon": " icon-puzzle",
                "title": "预授权列表",
                "code": "app.bank.preauth",
                "uisref": "app.bank.preauth"
            },
            {
                "icon": " icon-puzzle",
                "title": "转账",
                "code": "app.bank.transfer",
                "uisref": "app.bank.transfer"
            },
            {
                "icon": " icon-puzzle",
                "title": "交易流水",
                "code": "app.bank.deal",
                "uisref": "app.bank.deal"
            },
            {
                "icon": " icon-puzzle",
                "title": "取消授权",
                "code": "app.bank.npreauth",
                "uisref": "app.bank.npreauth"
            },
            {
                "icon": " icon-puzzle",
                "title": "设置额度",
                "code": "app.bank.overdraw",
                "uisref": "app.bank.overdraw"
            },
            {
                "icon": "icon-puzzle",
                "title": "货币兑率",
                "code": "app.bank.rate",
                "uisref": "app.bank.currencyrate"
            },
            {
                "icon": "icon-puzzle",
                "title": "支付列表",
                "code": "app.bank.pay.list",
                "uisref": "app.bank.pay.list"
            }
        ]
    }
]