import React from 'react';
import { Menu, Dropdown, Badge, Avatar, Button } from 'antd';
import { withRouter } from 'react-router-dom';

import { UserOutlined, LoginOutlined } from '@ant-design/icons';

const HeaderAvatar = (props) => {
  const { history } = props;
  const menu = (
    <Menu style={{ padding: '20px', display: 'grid', rowGap: '10px' }}>
      <Menu.Item key="0">
        <span>Mensagens</span>
      </Menu.Item>
      <Menu.Item key="1">
        <span>Notificações</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Button
          block
          icon={<LoginOutlined />}
          onClick={() => {
            localStorage.removeItem('token');
            history.push('/');
          }}
        >
          Sair
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Badge count={1}>
        <Avatar
          style={{ cursor: 'pointer' }}
          size={{ xs: 32, sm: 32, md: 32, lg: 55, xl: 55, xxl: 55 }}
          icon={<UserOutlined />}
        />
      </Badge>
    </Dropdown>
  );
};

export default withRouter(HeaderAvatar);
