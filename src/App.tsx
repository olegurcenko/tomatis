import React from 'react';
import { AppRouter } from './router/router';
import { Footer } from './footer';
import { DraggablePortal } from './pages/helpers/dragablePortal';
import { HeaderMain } from './header/headerMain';

export const App: React.FC = () => {
  return (<>
      <HeaderMain />
      <AppRouter />
      {/*<DraggablePortal />*/}
      <Footer />
  </>
  );
};
