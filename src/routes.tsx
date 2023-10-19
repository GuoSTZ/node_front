import React from 'react';
import { Navigate } from 'react-router-dom';
import HomeView from './pages/home';
import LoginView from './pages/login';

// 因为暂时没有对不同的模块做模块化工程，故此处直接去获取每个页面做路由页
const routes = [
  {
    path: '/',
    // 本应跳转到某个公共前缀，由nginx进行转发，此处省略
    element: <Navigate to={'home'} />
  },
  {
    path: '/home',
    name: '首页',
    element: <HomeView />,
  },
  {
    path: '/login',
    name: '登录页',
    element: <LoginView />,
  },
]

export default routes;