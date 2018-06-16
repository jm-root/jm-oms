module.exports = [
  {
    'icon': 'icon-settings',
    'title': '银行管理',
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
      },
      {
        'icon': ' icon-puzzle',
        'title': '币种管理',
        'code': 'app.bank.currency',
        'permission': 'nav_bank_currency',
        'uisref': 'app.bank.currency.list'
      }
    ]
  },
  {
    'icon': 'icon-settings',
    'title': '代理管理',
    'code': 'app.agent.manage',
    'permission': 'nav_agent_manage',
    'active': 'app.agent',
    'children': [
      {
        'icon': 'icon-user',
        'title': '代理列表',
        'code': 'app.agent.agent',
        'permission': 'nav_acl_agent',
        'active': 'app.agent.agent',
        'uisref': 'app.agent.agent'
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
        'code': 'app.acl.users',
        'permission': 'nav_acl_user',
        'active': 'app.acl.users',
        'uisref': 'app.acl.users.list'
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
    'permission': 'nav_system_manage',
    'active': 'app.system',
    'children': [
      {
        'icon': 'icon-puzzle',
        'title': '系统日志',
        'code': 'app.system.log',
        'permission': 'nav_system_log',
        'uisref': 'app.system.log'
      },
      {
        'icon': 'icon-puzzle',
        'title': '用户管理',
        'code': 'app.user.users',
        'permission': 'nav_user_users',
        'uisref': 'app.user.users'
      }
    ]
  },
  {
    'icon': 'icon-settings',
    'title': '配置管理',
    'code': 'app.config.manage',
    'permission': 'nav_config_manage',
    'active': 'app.config',
    'children': [
      {
        'icon': 'icon-puzzle',
        'title': '统一配置',
        'code': 'app.config.unified',
        'permission': 'nav_config_unified',
        'uisref': 'app.config.unified'
      }
    ]
  }
]
