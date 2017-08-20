module.exports = [
  {
    'icon': 'icon-settings',
    'title': '会员管理',
    'code': 'app.member.manage',
    'active': 'app.member',
    'children': [
      {
        'icon': 'icon-puzzle',
        'title': '普通会员',
        'code': 'app.member.member',
        'uisref': 'app.member.member'
      },
      {
        'icon': 'icon-puzzle',
        'title': 'vip会员',
        'code': 'app.member.vip',
        'uisref': 'app.member.vip'
      },
      {
        'icon': 'icon-puzzle',
        'title': '超级vip会员',
        'code': 'app.member.supervip',
        'uisref': 'app.member.supervip'
      },
      {
        'icon': 'icon-puzzle',
        'title': 'vip奖励配置',
        'code': 'app.member.config',
        'uisref': 'app.member.config'
      }
    ]
  },
  {
    'icon': 'icon-settings',
    'title': '积分管理',
    'code': 'app.integral.manage',
    'active': 'app.integral',
    'permission': 'nav_integral_manage',
    'children': [
      {
        'icon': 'icon-puzzle',
        'title': '积分信息',
        'code': 'app.integral.info',
        'permission': 'nav_integral_info',
        'uisref': 'app.integral.info'
      },
      {
        'icon': 'icon-puzzle',
        'title': '赠送积分',
        'code': 'app.integral.give',
        'permission': 'nav_integral_give',
        'uisref': 'app.integral.give'
      },
      {
        'icon': 'icon-puzzle',
        'title': '撤回积分',
        'code': 'app.integral.withdraw',
        'permission': 'nav_integral_withdraw',
        'uisref': 'app.integral.withdraw'
      },
      {
        'icon': 'icon-puzzle',
        'title': '操作记录',
        'code': 'app.integral.log',
        'permission': 'nav_integral_log',
        'uisref': 'app.integral.log'
      }
    ]
  },
  {
    'icon': 'icon-settings',
    'title': '小组管理',
    'code': 'app.team.manage',
    'permission': 'nav_team_manage',
    'active': 'app.team',
    'children': [
      {
        'icon': 'icon-puzzle',
        'title': '小组配置',
        'code': 'app.team.config',
        'permission': 'nav_team_config',
        'active': 'app.team.config',
        'uisref': 'app.team.config.list'
      },
      {
        'icon': 'icon-puzzle',
        'title': '创建小组',
        'code': 'app.team.new',
        'permission': 'nav_team_new',
        'uisref': 'app.team.new'
      },
      {
        'icon': 'icon-puzzle',
        'title': '小组管理',
        'code': 'app.team.manage',
        'permission': 'nav_team_manage',
        'uisref': 'app.team.manage.list'
      },
      {
        'icon': 'icon-puzzle',
        'title': '出组管理',
        'code': 'app.team.out',
        'permission': 'nav_team_out',
        'uisref': 'app.team.out'
      }
    ]
  },
  {
    'icon': 'icon-settings',
    'title': '商城管理',
    'code': 'app.shop.manage',
    'permission': 'nav_shop_manage',
    'active': 'app.shop',
    'children': [
      {
        'icon': 'icon-puzzle',
        'title': '产品管理',
        'code': 'app.shop.product',
        'permission': 'nav_shop_product',
        'uisref': 'app.shop.product.list'
      },
      {
        'icon': 'icon-puzzle',
        'title': '订单管理',
        'code': 'app.shop.order',
        'permission': 'nav_shop_order',
        'uisref': 'app.shop.order.list'
      }
    ]
  },
  {
    'icon': 'icon-settings',
    'title': 'T币管理',
    'code': 'app.bank.manage',
    'permission': 'nav_bank_manage',
    'active': 'app.bank',
    'children': [
      {
        'icon': ' icon-puzzle',
        'title': '账户列表',
        'code': 'app.bank.account',
        'permission': 'nav_bank_account',
        'uisref': 'app.bank.account'
      },
      {
        'icon': ' icon-puzzle',
        'title': '转账',
        'code': 'app.bank.transfer',
        'permission': 'nav_bank_transfer',
        'uisref': 'app.bank.transfer'
      },
      {
        'icon': ' icon-puzzle',
        'title': '交易流水',
        'code': 'app.bank.deal',
        'permission': 'nav_bank_deal',
        'uisref': 'app.bank.deal'
      }
    ]
  },
  {
    'icon': 'icon-settings',
    'title': '权限管理',
    'code': 'app.acl.manage',
    'permission': 'nav_acl_manage',
    'active': 'app.acl',
    'children': [
      {
        'icon': 'icon-user',
        'title': '用户管理',
        'code': 'app.acl.user',
        'permission': 'nav_acl_user',
        'active': 'app.acl.user',
        'uisref': 'app.acl.user.list'
      },
      {
        'icon': 'icon-user',
        'title': '角色管理',
        'code': 'app.acl.role',
        'permission': 'nav_acl_role',
        'uisref': 'app.acl.role'
      },
      {
        'icon': 'icon-star',
        'title': '资源管理',
        'code': 'app.acl.resource',
        'permission': 'nav_acl_resource',
        'uisref': 'app.acl.resource'
      }
    ]
  },
  {
    'icon': 'icon-settings',
    'title': '系统管理',
    'code': 'app.system.manage',
    'active': 'app.system',
    'children': [
      {
        'icon': 'icon-puzzle',
        'title': '系统日志',
        'code': 'app.system.log',
        'uisref': 'app.system.log'
      },
      {
        'icon': 'icon-puzzle',
        'title': '用户管理',
        'code': 'app.member.info',
        'uisref': 'app.member.info.list'
      }
    ]
  },
  {
    'icon': 'icon-settings',
    'title': '配置管理',
    'code': 'app.config.manage',
    'active': 'app.config',
    'children': [
      {
        'icon': 'icon-puzzle',
        'title': '菜单配置',
        'code': 'app.config.menus',
        'uisref': 'app.config.menus'
      },
      {
        'icon': 'icon-puzzle',
        'title': '系统初始化',
        'code': 'app.config.systeminit',
        'uisref': 'app.config.systeminit'
      },
      {
        'icon': 'icon-puzzle',
        'title': '系统配置',
        'code': 'app.config.systemconfig',
        'uisref': 'app.config.systemconfig'
      },
      {
        'icon': 'icon-puzzle',
        'title': '统一配置',
        'code': 'app.config.unified',
        'uisref': 'app.config.unified'
      }
    ]
  }
]
