import React from 'react';
import { AppRouter } from './router/router';
import { Footer } from './footer';
import { HashRouter } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <>
    {/*<HashRouter>*/}

      <AppRouter />
    {/*</HashRouter>*/}
      <Footer />
    </>
  );
}
