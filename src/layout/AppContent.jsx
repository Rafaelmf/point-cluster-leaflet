import React from 'react';
import { Layout } from 'antd';
import MapView from '../views/map/MapView';

const { Content } = Layout;

const AppContent = () => {
  return (
    <Content className="site-layout">
      <div className="site-layout-content">
        <MapView />
      </div>
    </Content>
  );
};

export default AppContent;
