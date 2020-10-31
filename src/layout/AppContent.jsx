import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import MapView from '../views/map/MapView';
import Home from '../views/home/Home';

const { Content } = Layout;

const AppContent = () => {
  return (
    <Content className="site-layout">
      <div className="site-layout-content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/map">
            <MapView />
          </Route>
          <Route>
            <div />
          </Route>
        </Switch>
      </div>
    </Content>
  );
};

export default AppContent;
