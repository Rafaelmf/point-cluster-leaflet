/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Badge, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = ({ history }) => {
  const [selectedMenu, setSelectedMenu] = useState(['1']);

  useEffect(() => {
    const path = history.location.pathname.split('/')[1];
    let newSelectedKey;
    switch (path) {
      case 'map':
        newSelectedKey = ['2'];
        break;
      default:
        newSelectedKey = ['1'];
    }
    setSelectedMenu(newSelectedKey);
  }, [history.location.pathname]);

  return (
    <Header style={{ zIndex: 1, width: '100%' }}>
      <div className="header-grid">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={selectedMenu}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/map">Mapa</Link>
          </Menu.Item>
          <Menu.Item key="3">Seu imóvel</Menu.Item>
          <Menu.Item key="4">Contato</Menu.Item>
        </Menu>
        <div>
          <Badge count={1}>
            <Avatar
              size={{ xs: 32, sm: 32, md: 32, lg: 55, xl: 55, xxl: 55 }}
              icon={<UserOutlined />}
            />
          </Badge>
        </div>
      </div>
    </Header>
  );
};

export default withRouter(AppHeader);
