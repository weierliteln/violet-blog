import React from 'react'
import { Breadcrumb, Layout } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';

export default function CustomLayout() {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className='h-lvh'>
      <Header
        className='bg-gradient-to-r from-yellow-400 to-yellow-500 text-white w-4/5 m-auto  mt-4 mb-4 rounded-2xl'

      >
        <div className="flex ...">
          <div className="flex-none w-20">
            Violet
          </div>
          <div className="flex-auto w-4/5 grid gap-x-1 grid-cols-8">
            <Link to='/home'>首页<RightOutlined /></Link>
            <Link to='/article'>文章<RightOutlined /></Link>
            <Link to='/function'>功能集合<RightOutlined /></Link>
            <Link to='/comment'>留言<RightOutlined /></Link>
            <Link to='/album'>相册<RightOutlined /></Link>
          </div>
          <div className="flex-auto w-1/5 ...">
            <Link to='/login'>登录</Link>
          </div>
        </div>
      </Header>
      <Content
        className='bg-gray-200 w-4/5 m-auto'
      >
        <Breadcrumb
          // 右侧对齐
          className='float-right'
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
