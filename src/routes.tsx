import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LayoutOutlet from '@/pages/Layout';
import HomeView from '@/pages/home';
import LoginView from '@/pages/login';
import ProfileView from '@/pages/profile';
import FileView from '@/pages/file';
import PreviewView from '@/pages/preview';


// 因为暂时没有对不同的模块做模块化工程，故此处直接去获取每个页面做路由页
export const routes = [
  {
    path: 'home',
    name: '首页',
    element: <HomeView />,
  },
  {
    path: 'file',
    name: '后台数据',
    element: <FileView />,
  },
  {
    path: 'preview',
    name: '前台展示',
    element: <PreviewView />,
  },
]

const appRoutes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Navigate to={'/app/home'} />
      },
      {
        path: 'app',
        element: <LayoutOutlet />,
        children: [
          ...routes,
          { 
            path: 'profile', 
            name: '个人信息', 
            element: <ProfileView /> 
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    name: '登录页',
    element: <LoginView />,
  },
  {
    path: 'dashboard',
    name: '展示页',
    element: <div>preview</div>,
  },
]

export default appRoutes;