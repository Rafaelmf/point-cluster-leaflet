import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';

import LoginModal from '../components/LoginModal';
import HeaderAvatar from '../components/HeaderAvatar';

const { Header } = Layout;

const AppHeader = () => {
  const [isLoginModalVisible, setisLoginModalVisible] = useState(false);

  // useEffect(() => {
  //   const path = history.location.pathname.split('/')[1];
  //   let newSelectedKey;
  //   switch (path) {
  //     case 'map':
  //       newSelectedKey = ['2'];
  //       break;
  //     default:
  //       newSelectedKey = ['1'];
  //   }
  //   setSelectedMenu(newSelectedKey);
  // }, [history.location.pathname]);

  return (
    <Header style={{ zIndex: 1, width: '100%' }}>
      <div className="header-grid">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/mapa">Mapa</Link>
          </Menu.Item>
          {localStorage.getItem('token') ? (
            <Menu.Item key="3">
              <Link to="/registrar-imovel">Registrar imóvel</Link>
            </Menu.Item>
          ) : null}
          <Menu.Item key="4">
            <Link to="/contato">Contato</Link>
          </Menu.Item>
        </Menu>
        <div className="avatar-div">
          {localStorage.getItem('token') ? (
            <HeaderAvatar />
          ) : (
            <Button
              icon={<UserOutlined />}
              size="large"
              onClick={() => setisLoginModalVisible(!isLoginModalVisible)}
              type="primary"
            >
              Entrar
            </Button>
          )}
        </div>
      </div>
      <LoginModal
        visible={isLoginModalVisible}
        setVisibility={setisLoginModalVisible}
      />
    </Header>
  );
};

export default withRouter(AppHeader);
