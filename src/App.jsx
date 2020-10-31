import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './layout/AppHeader';
import AppContent from './layout/AppContent';
import AppFooter from './layout/AppFooter';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  </BrowserRouter>
);

export default App;
