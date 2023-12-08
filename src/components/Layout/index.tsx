import React, { useEffect } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import type { MenuProps } from 'antd';
import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';

export interface LayoutProps {
  userInfo: {
    username: string;
    id: number;
    role: string;
  };
  logout: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  menu: MenuProps
}

const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
  const { children, userInfo, logout, menu } = props;
  const navigate = useNavigate();

  useEffect(() => {
    
  }, [])

  const DropdownItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a onClick={() => navigate('/app/profile')}>个人信息</a>
      ),
    },
    {
      key: '2',
      label: (
        <a onClick={logout}>登出</a>
      ),
    },
  ]

  return (
    <div className={styles.layout}>
      <header>
        <div className={styles.logo}></div>
        <div className={styles.nav}></div>
        <div className={styles.userInfo}>
          <Dropdown menu={{ items: DropdownItems }}>
            <div>
              <Avatar src={<img src={'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'} alt="avatar" />} />
              {userInfo.username}
            </div>
          </Dropdown>
        </div>
      </header>

      <div className={styles['layout-content']}>
        <div className={styles['layout-menu']}>
          <Menu {...menu} />
        </div>
        <div className={styles['layout-module']}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;