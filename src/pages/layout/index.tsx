import React, { useEffect, useState } from 'react';
import * as actions from './actions';
import { Button } from 'antd';

export interface LayoutProps {

}

const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState({} as {
    username: string;
    id: number;
    role: string;
  });

  useEffect(() => {
    actions.fetchUserInfo({}, (data: any) => {
      setUserInfo(data);
    });
  }, [])

  return (
    <div>
      <header>
        <div>用户：{userInfo.username}</div>
        <div>用户角色：{userInfo.role}</div>
        <div><Button onClick={() => actions.fetchLogout()}>登出</Button></div>
      </header>
      {children}
    </div>
  )
}

export default Layout;