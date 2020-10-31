import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Empreendimentos</Menu.Item>
        <Menu.Item key="3">Seu imóvel</Menu.Item>
        <Menu.Item key="4">Contato</Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
