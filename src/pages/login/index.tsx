import React from 'react';
import { Tabs, TabsProps } from 'antd';
import * as actions from './actions';
import LoginView from './views/login';
import RegisterView from './views/register';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '登录',
    children: <LoginView />,
  },
  {
    key: '2',
    label: '注册',
    children: <RegisterView />,
  }
];

const Login: React.FC = () => {
  actions.useEncryptionConfigAtom();

  return (
    <Tabs items={items} destroyInactiveTabPane />
  )
};

export default Login;