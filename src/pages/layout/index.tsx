import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { fetchUserInfo, fetchLogout } from '@/common/actions';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { routes } from '@/routes';


const LayoutApp = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({} as {
    username: string;
    id: number;
    role: string;
  });

  useEffect(() => {
    fetchUserInfo({}, (data: any) => {
      setUserInfo(data);
    });
  }, [])

  const transferRoutesToMenu = (data: any[]) => {
    return data.map(item => {
      return {
        ...item,
        label: item.name,
        key: item.path,
        onclick
      }
    })
  }

  return (
    <Layout 
      menu={{
        onClick: ({key}) => navigate(`/app/${key}`),
        items: transferRoutesToMenu(routes)
      }} 
      userInfo={userInfo} 
      logout={fetchLogout}>
      <Outlet />
    </Layout>
  )
}

export default LayoutApp;