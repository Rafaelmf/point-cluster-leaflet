import React from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import MapView from '../views/map/MapView';
import HomeView from '../views/home/HomeView';
import RegisterLocationView from '../views/register-location/RegisterLocationView';
import ContactView from '../views/contact/ContactView';

const { Content } = Layout;

const AppContent = () => {
  const PrivateRoute = (props) => {
    const { exact, path, component: Component } = props;
    const isAuthenticated = localStorage.getItem('token');

    return (
      <Route
        exact={exact}
        path={path}
        render={() =>
          isAuthenticated ? <Component /> : <Redirect to={{ pathname: '/' }} />
        }
      />
    );
  };

  return (
    <Content className="site-layout">
      <div className="site-layout-content">
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/mapa" component={MapView} />
          <Route exact path="/contato" component={ContactView} />
          <PrivateRoute
            exact
            path="/registrar-imovel"
            component={RegisterLocationView}
          />
        </Switch>
      </div>
    </Content>
  );
};

export default AppContent;
