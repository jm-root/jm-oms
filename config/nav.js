module.exports = [
  {
    "icon": "glyphicon glyphicon-bullhorn",
    "title": "推广地址",
    "translate": "nav.PROMOTE",
    "code": "nav_promote",
    "active": "app.promote",
    "uisref": "app.promote"
  },



  {
    "icon": "icon-settings",
    "title": "菜单管理",
    "translate": "nav.MENU_MANAGE",
    "code": "nav_menu_manage",
    "active": "app.menu"
  },
    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "玩家管理",
      "translate": "nav.PLAYER_MANAGE",
      "code": "nav_player_manage",
      "active": "app.player"
    },
    { "parent":"nav_player_manage",
      "icon": "icon-puzzle",
      "title": "玩家信息",
      "translate": "nav.PLAYER_INFO",
      "code": "nav_player_info",
      "active": "app.player.info",
      "uisref": "app.player.info.list"
    },
    { "parent":"nav_player_manage",
      "icon": "icon-puzzle",
      "title": "在线状态",
      "translate": "nav.PLAYER_ONLINE",
      "code": "nav_player_online",
      "uisref": "app.player.online"
    },
    { "parent":"nav_player_manage",
      "icon": "icon-puzzle",
      "title": "游戏记录",
      "translate": "nav.PLAYER_RECORD",
      "code": "nav_player_record",
      "uisref": "app.player.record"
    },
    { "parent":"nav_player_manage",
      "icon": "icon-puzzle",
      "title": "赠送记录",
      "translate": "nav.PLAYER_GIVELOG",
      "code": "nav_player_givelog",
      "uisref": "app.player.givelog"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "充值管理",
      "translate": "nav.RECHARGE_MANAGE",
      "code": "nav_recharge_manage",
      "active": "app.recharge"
    },
    { "parent":"nav_recharge_manage",
      "icon": "icon-puzzle",
      "title": "点卡类型",
      "translate": "nav.RECHARGE_CARDTYPE",
      "code": "nav_recharge_cardtype",
      "active": "app.recharge.cardtype",
      "uisref": "app.recharge.cardtype.list"
    },
    { "parent":"nav_recharge_manage",
      "icon": "icon-puzzle",
      "title": "官方点卡",
      "translate": "nav.RECHARGE_CARD",
      "code": "nav_recharge_card",
      "active": "app.recharge.card",
      "uisref": "app.recharge.card.list"
    },
    { "parent":"nav_recharge_manage",
      "icon": "icon-puzzle",
      "title": "第三方充值",
      "translate": "nav.RECHARGE_THIRD",
      "code": "nav_recharge_third",
      "uisref": "app.recharge.third"
    },
    { "parent":"nav_recharge_manage",
      "icon": "icon-puzzle",
      "title": "点卡充值记录",
      "translate": "nav.RECHARGE_CARDLOG",
      "code": "nav_recharge_cardlog",
      "uisref": "app.recharge.cardlog"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "敏感词管理",
      "translate": "nav.WORDFILTER_MANAGE",
      "code": "nav_wordfilter_manage",
      "active": "app.wordfilter"
    },
    { "parent":"nav_wordfilter_manage",
      "icon": "icon-puzzle",
      "title": "敏感词列表",
      "translate": "nav.WORDFILTER_LIST",
      "code": "nav_wordfilter_list",
      "uisref": "app.wordfilter.list"
    },
    { "parent":"nav_wordfilter_manage",
      "icon": "icon-puzzle",
      "title": "拦截日志",
      "translate": "nav.WORDFILTER_LOG",
      "code": "nav_wordfilter_log",
      "uisref": "app.wordfilter.log"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "留言版管理",
      "translate": "nav.GUESTBOOK_MANAGE",
      "code": "nav_guestbook_manage",
      "active": "app.guestbook"
    },
    { "parent":"nav_guestbook_manage",
      "icon": "icon-puzzle",
      "title": "留言版列表",
      "translate": "nav.GUESTBOOK_LIST",
      "code": "nav_guestbook_list",
      "uisref": "app.guestbook.list"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "大厅管理",
      "translate": "nav.HOME_MANAGE",
      "code": "nav_home_manage",
      "active": "app.home"
    },
    { "parent":"nav_home_manage",
      "icon": "icon-settings",
      "title": "VIP配置",
      "translate": "nav.HOME_VIP_CONFIG",
      "code": "nav_home_vip_config",
      "active": "app.home.vip"
    },
    { "parent":"nav_home_vip_config",
      "icon": " icon-puzzle",
      "title": "VIP条件",
      "translate": "nav.HOME_VIP_CONDITION",
      "code": "nav_home_vip_cond",
      "uisref": "app.home.vip.cond"
    },
    { "parent":"nav_home_vip_config",
      "icon": " icon-puzzle",
      "title": "优惠种类",
      "translate": "nav.HOME_VIP_ITEM",
      "code": "nav_home_vip_item",
      "uisref": "app.home.vip.item"
    },
    { "parent":"nav_home_vip_config",
      "icon": " icon-puzzle",
      "title": "分配优惠",
      "translate": "nav.HOME_VIP_SET",
      "code": "nav_home_vip_set",
      "uisref": "app.home.vip.set"
    },

    { "parent":"nav_home_manage",
      "icon": "icon-settings",
      "title": "论坛管理",
      "translate": "nav.HOME_BBS_MANAGE",
      "code": "nav_home_bbs_manage",
      "active": "app.home.bbs"
    },
    { "parent":"nav_home_bbs_manage",
      "icon": " icon-puzzle",
      "title": "版块列表",
      "translate": "nav.HOME_BBS_FORUM",
      "code": "nav_home_bbs_forum",
      "active": "app.home.bbs.forum",
      "uisref": "app.home.bbs.forum.list"
    },
    { "parent":"nav_home_bbs_manage",
      "icon": " icon-puzzle",
      "title": "帖子列表",
      "translate": "nav.HOME_BBS_TOPIC",
      "code": "nav_home_bbs_topic",
      "active": "app.home.bbs.topic",
      "uisref": "app.home.bbs.topic.list"
    },

    { "parent":"nav_home_manage",
      "icon": " icon-puzzle",
      "title": "活动列表",
      "translate": "nav.HOME_ACTIVITYS",
      "code": "nav_home_activitys",
      "active": "app.home.activitys",
      "uisref": "app.home.activitys.list"
    },
    { "parent":"nav_home_manage",
      "icon": " icon-puzzle",
      "title": "签到设置",
      "translate": "nav.HOME_CHECKIN",
      "code": "nav_home_checkin",
      "active": "app.home.checkin",
      "uisref": "app.home.checkin.list"
    },
    { "parent":"nav_home_manage",
      "icon": " icon-puzzle",
      "title": "发送公告",
      "translate": "nav.HOME_SENDNOTICE",
      "code": "nav_home_sendnotice",
      "uisref": "app.home.sendnotice"
    },
    { "parent":"nav_home_manage",
      "icon": " icon-puzzle",
      "title": "发送邮件",
      "translate": "nav.HOME_SENDDAK",
      "code": "nav_home_senddak",
      "uisref": "app.home.senddak"
    },
    { "parent":"nav_home_manage",
      "icon": " icon-puzzle",
      "title": "排行榜设置",
      "translate": "nav.HOME_RANK",
      "code": "nav_home_rank",
      "uisref": "app.home.rank"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "活动管理",
      "translate": "nav.ACTIVITY_MANAGE",
      "code": "nav_activity_manage",
      "active": "app.activity"
    },
    { "parent":"nav_activity_manage",
      "icon": "icon-puzzle",
      "title": "道具列表",
      "translate": "nav.ACTIVITY_PROP",
      "code": "nav_activity_prop",
      "active": "app.activity.prop",
      "uisref": "app.activity.prop.list"
    },
    { "parent":"nav_activity_manage",
      "icon": "icon-puzzle",
      "title": "分配道具",
      "translate": "nav.ACTIVITY_GAVEPROP",
      "code": "nav_activity_gaveprop",
      "uisref": "app.activity.gaveprop"
    },
    { "parent":"nav_activity_manage",
      "icon": "icon-puzzle",
      "title": "活动版块",
      "translate": "nav.ACTIVITY_FORUM",
      "code": "nav_activity_forum",
      "active": "app.activity.forum",
      "uisref": "app.activity.forum.list"
    },
    { "parent":"nav_activity_manage",
      "icon": "icon-puzzle",
      "title": "活动列表",
      "translate": "nav.ACTIVITY_LIST",
      "code": "nav_activity_list",
      "active": "app.activity.aty",
      "uisref": "app.activity.aty.list"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "论坛管理",
      "translate": "nav.BBS_MANAGE",
      "code": "nav_bbs_manage",
      "active": "app.bbs"
    },
    { "parent":"nav_bbs_manage",
      "icon": " icon-puzzle",
      "title": "版块列表",
      "translate": "nav.BBS_FORUM",
      "code": "nav_bbs_forum",
      "active": "app.bbs.forum",
      "uisref": "app.bbs.forum.list"
    },
    { "parent":"nav_bbs_manage",
      "icon": " icon-puzzle",
      "title": "帖子列表",
      "translate": "nav.BBS_TOPIC",
      "code": "nav_bbs_topic",
      "active": "app.bbs.topic",
      "uisref": "app.bbs.topic.list"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "商城管理",
      "translate": "nav.SHOP_MANAGE",
      "code": "nav_shop_manage",
      "active": "app.shop"
    },
    { "parent":"nav_shop_manage",
      "icon": "icon-puzzle",
      "title": "分类管理",
      "translate": "nav.SHOP_CATEGORY",
      "code": "nav_shop_category",
      "active": "app.shop.category",
      "uisref": "app.shop.category.list"
    },
    { "parent":"nav_shop_manage",
      "icon": "icon-puzzle",
      "title": "产品品管理",
      "translate": "nav.SHOP_PRODUCT",
      "code": "nav_shop_product",
      "active": "app.shop.product",
      "uisref": "app.shop.product.list"
    },
    { "parent":"nav_shop_manage",
      "icon": "icon-puzzle",
      "title": "订单管理",
      "translate": "nav.SHOP_ORDER",
      "code": "nav_shop_order",
      "active": "app.shop.order",
      "uisref": "app.shop.order.list"
    },
    { "parent":"nav_shop_manage",
      "icon": "icon-puzzle",
      "title": "夺宝管理",
      "translate": "nav.SHOP_LOTTERY",
      "code": "nav_shop_lottery",
      "active": "app.shop.lottery",
      "uisref": "app.shop.lottery.list"
    },
    { "parent":"nav_shop_manage",
      "icon": "icon-puzzle",
      "title": "抽奖管理",
      "translate": "nav.SHOP_BET",
      "code": "nav_shop_bet",
      "active": "app.shop.bet",
      "uisref": "app.shop.bet.list"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "应用管理",
      "translate": "nav.APP_MANAGE",
      "code": "nav_app_manage",
      "active": "app.apps"
    },
    { "parent":"nav_app_manage",
      "icon": " icon-puzzle",
      "title": "应用列表",
      "translate": "nav.APP_CREATE",
      "code": "nav_app_create",
      "active": "app.apps.manage",
      "uisref": "app.apps.manage"
    },
    { "parent":"nav_app_manage",
      "icon": " icon-puzzle",
      "title": "应用上传",
      "translate": "nav.APP_UPLOAD",
      "code": "nav_app_upload",
      "active": "app.apps.upload",
      "uisref": "app.apps.upload"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "房间管理",
      "translate": "nav.ROOM_MANAGE",
      "code": "nav_room_manage",
      "active": "app.rooms",
      "uisref": "app.rooms.manage"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "包管理",
      "translate": "nav.PACKAGE_MANAGE",
      "code": "nav_package_manage",
      "active": "app.package"
    },
    { "parent":"nav_package_manage",
      "icon": "icon-puzzle",
      "title": "领包",
      "translate": "nav.PACKAGE_TAKE",
      "code": "nav_package_take",
      "uisref": "app.package.take"
    },
    { "parent":"nav_package_manage",
      "icon": "icon-puzzle",
      "title": "包设置",
      "translate": "nav.PACKAGE_SET",
      "code": "nav_package_set",
      "uisref": "app.package.set"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "渠道管理",
      "translate": "nav.AGENT_MANAGE",
      "code": "nav_agent_manage",
      "active": "app.agent"
    },
    { "parent":"nav_agent_manage",
      "icon": "icon-puzzle",
      "title": "下级渠道创建",
      "translate": "nav.AGENT_CREATE",
      "code": "nav_agent_create",
      "uisref": "app.agent.create"
    },
    { "parent":"nav_agent_manage",
      "icon": "icon-puzzle",
      "title": "渠道列表",
      "translate": "nav.AGENT_LIST",
      "code": "nav_agent_list",
      "uisref": "app.agent.list"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "渠道数据",
      "translate": "nav.AGENT_DATA",
      "code": "nav_agent_data",
      "active": "app.agentdata"
    },
    { "parent":"nav_agent_data",
      "icon": "icon-puzzle",
      "title": "注册",
      "translate": "nav.AGENTDATA_REGISTER",
      "code": "nav_agentdata_register",
      "uisref": "app.agentdata.register"
    },
    { "parent":"nav_agent_data",
      "icon": "icon-puzzle",
      "title": "充值",
      "translate": "nav.AGENTDATA_RECHARGE",
      "code": "nav_agentdata_recharge",
      "uisref": "app.agentdata.recharge"
    },
    { "parent":"nav_agent_data",
      "icon": "icon-puzzle",
      "title": "数据分析",
      "translate": "nav.AGENTDATA_ANALYSIS",
      "code": "nav_agentdata_analysis",
      "uisref": "app.agentdata.analysis"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "T币系统",
      "translate": "nav.COIN_SYS",
      "code": "nav_coin_sys",
      "active": "app.coin"
    },
    { "parent":"nav_coin_sys",
      "icon": "icon-settings",
      "title": "T币库存",
      "translate": "nav.COIN_STOCK",
      "code": "nav_coin_stock",
      "active": "app.coin.stock"
    },
    { "parent":"nav_coin_stock",
      "icon": "icon-puzzle",
      "title": "T币充值",
      "translate": "nav.COIN_STOCK_RECHARGE",
      "code": "nav_coin_stock_recharge",
      "uisref": "app.coin.stock.recharge"
    },
    { "parent":"nav_coin_stock",
      "icon": "icon-puzzle",
      "title": "库存列表",
      "translate": "nav.COIN_STOCK_LIST",
      "code": "nav_coin_stock_list",
      "uisref": "app.coin.stock.list"
    },
    { "parent":"nav_coin_stock",
      "icon": "icon-puzzle",
      "title": "订单管理",
      "translate": "nav.COIN_STOCK_ORDER",
      "code": "nav_coin_stock_order",
      "uisref": "app.coin.stock.order"
    },

    { "parent":"nav_coin_sys",
      "icon": "icon-settings",
      "title": "T币分发",
      "translate": "nav.COIN_DISTRIBUTE",
      "code": "nav_coin_distribute",
      "active": "app.coin.distribute"
    },
    { "parent":"nav_coin_distribute",
      "icon": "icon-puzzle",
      "title": "生成首充号",
      "translate": "nav.COIN_DISTRIBUTE_MAKE",
      "code": "nav_coin_distribute_make",
      "uisref": "app.coin.distribute.make"
    },
    { "parent":"nav_coin_distribute",
      "icon": "icon-puzzle",
      "title": "批量分发",
      "translate": "nav.COIN_DISTRIBUTE_BATCH",
      "code": "nav_coin_distribute_batch",
      "uisref": "app.coin.distribute.batch"
    },

    { "parent":"nav_coin_sys",
      "icon": "icon-settings",
      "title": "账号管理",
      "translate": "nav.COIN_ACCOUNT",
      "code": "nav_coin_account",
      "active": "app.coin.account"
    },
    { "parent":"nav_coin_account",
      "icon": "icon-puzzle",
      "title": "账号列表",
      "translate": "nav.COIN_ACCOUNT_LIST",
      "code": "nav_coin_account_list",
      "uisref": "app.coin.account.list"
    },

    { "parent":"nav_coin_sys",
      "icon": "icon-settings",
      "title": "使用记录",
      "translate": "nav.COIN_RECORD",
      "code": "nav_coin_record",
      "active": "app.coin.record"
    },
    { "parent":"nav_coin_record",
      "icon": "icon-puzzle",
      "title": "玩家账号统计",
      "translate": "nav.COIN_RECORD_PLAYERSTAT",
      "code": "nav_coin_record_playerStat",
      "uisref": "app.coin.record.playerStat"
    },
    { "parent":"nav_coin_record",
      "icon": "icon-puzzle",
      "title": "渠道账号统计",
      "translate": "nav.COIN_RECORD_AGENTSTAT",
      "code": "nav_coin_record_agentStat",
      "uisref": "app.coin.record.agentStat"
    },
    { "parent":"nav_coin_record",
      "icon": "icon-puzzle",
      "title": "日志查询",
      "translate": "nav.COIN_RECORD_LOGS",
      "code": "nav_coin_record_logs",
      "uisref": "app.coin.record.logs"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "统计报表",
      "translate": "nav.REPORT",
      "code": "nav_report",
      "active": "app.report"
    },
    { "parent":"nav_report",
      "icon": "icon-puzzle",
      "title": "账目统计",
      "translate": "nav.REPORT_ACCOUNT",
      "code": "nav_report_account",
      "uisref": "app.report.account"
    },


    {
      "parent":"nav_menu_manage",
      "icon": "icon-settings",
      "title": "银行管理",
      "translate": "nav.BANK_MANAGE",
      "code": "nav_bank_manage",
      "active": "app.bank"
    },
    { "parent":"nav_bank_manage",
      "icon": " icon-puzzle",
      "title": "账户列表",
      "translate": "nav.BANK_ACCOUNT",
      "code": "nav_bank_account",
      "uisref": "app.bank.account"
    },
    { "parent":"nav_bank_manage",
      "icon": " icon-puzzle",
      "title": "预授权列表",
      "translate": "nav.BANK_PREAUTH",
      "code": "nav_bank_preauth",
      "uisref": "app.bank.preauth"
    },
    { "parent":"nav_bank_manage",
      "icon": " icon-puzzle",
      "title": "转账",
      "translate": "nav.BANK_TRANSFER",
      "code": "nav_bank_transfer",
      "uisref": "app.bank.transfer"
    },
    { "parent":"nav_bank_manage",
      "icon": " icon-puzzle",
      "title": "交易流水",
      "translate": "nav.BANK_DEAL",
      "code": "nav_bank_deal",
      "uisref": "app.bank.deal"
    },
    { "parent":"nav_bank_manage",
      "icon": " icon-puzzle",
      "title": "取消授权",
      "translate": "nav.BANK_NPREAUTH",
      "code": "nav_bank_npreauth",
      "uisref": "app.bank.npreauth"
    },
    { "parent":"nav_bank_manage",
      "icon": " icon-puzzle",
      "title": "设置额度",
      "translate": "nav.BANK_OVERDRAW",
      "code": "nav_bank_overdraw",
      "uisref": "app.bank.overdraw"
    },
    { "parent":"nav_bank_manage",
      "icon": "icon-puzzle",
      "title": "货币兑率",
      "translate": "nav.BANK_RATE",
      "code": "nav_bank_rate",
      "uisref": "app.bank.currencyrate"
    },
    { "parent":"nav_bank_manage",
      "icon": "icon-puzzle",
      "title": "支付列表",
      "translate": "nav.BANK_PAY_LIST",
      "code": "nav_bank_pay_list",
      "uisref": "app.bank.pay.list"
    },




  {
    "icon": "icon-settings",
    "title": "权限管理",
    "translate": "nav.PERMISSION_MANAGE",
    "code": "nav_permission_manage",
    "active": "app.per"
  },
  { "parent":"nav_permission_manage",
    "icon": "icon-user",
    "title": "用户管理",
    "translate": "nav.USER_MANAGE",
    "code": "nav_user_manage",
    "active": "app.per.users",
    "uisref": "app.per.users.list"
  },
  { "parent":"nav_permission_manage",
    "icon": "icon-people",
    "title": "角色管理",
    "translate": "nav.ROLE_MANAGE",
    "code": "nav_role_manage",
    "uisref": "app.per.role"
  },
  { "parent":"nav_permission_manage",
    "icon": "icon-star",
    "title": "资源管理",
    "translate": "nav.RESOURCE_MANAGE",
    "code": "nav_resource_manage",
    "uisref": "app.per.resource"
  },
  { "parent":"nav_permission_manage",
    "icon": "icon-user-follow",
    "title": "角色用户",
    "translate": "nav.ROLE_USER",
    "code": "nav_role_user",
    "uisref": "app.per.roleUser"
  },




  {
    "icon": "icon-settings",
    "title": "系统管理",
    "translate": "nav.SYSTEM_MANAGE",
    "code": "nav_system_manage",
    "active": "app.system"
  },
  { "parent":"nav_system_manage",
    "icon": "icon-puzzle",
    "title": "管理员列表",
    "translate": "nav.SYSTEM_ADMIN",
    "code": "nav_system_admin",
    "uisref": "app.system.admin"
  },
  { "parent":"nav_system_manage",
    "icon": "icon-puzzle",
    "title": "系统日志",
    "translate": "nav.SYSTEM_LOG",
    "code": "nav_system_log",
    "uisref": "app.system.log"
  },




  {
    "icon": "icon-settings",
    "title": "配置管理",
    "translate": "nav.CONFIG_MANAGE",
    "code": "nav_config_manage",
    "active": "app.config"
  },
  { "parent":"nav_config_manage",
    "icon": "icon-puzzle",
    "title": "菜单配置",
    "translate": "nav.CONFIG_MENUS",
    "code": "nav_config_menus",
    "uisref": "app.config.menus"
  },
  { "parent":"nav_config_manage",
    "icon": "icon-puzzle",
    "title": "系统初始化",
    "translate": "nav.CONFIG_SYSTEMINIT",
    "code": "nav_config_systeminit",
    "uisref": "app.config.systeminit"
  },
  { "parent":"nav_config_manage",
    "icon": "icon-puzzle",
    "title": "系统配置",
    "translate": "nav.CONFIG_SYSTEMCONFIG",
    "code": "nav_config_systemconfig",
    "uisref": "app.config.systemconfig"
  },
  { "parent":"nav_config_manage",
    "icon": "icon-puzzle",
    "title": "统一配置",
    "translate": "nav.CONFIG_UNIFIED",
    "code": "nav_config_unified",
    "uisref": "app.config.unified"
  }
];