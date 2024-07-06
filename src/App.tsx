import React from 'react';
import { Header } from './header/header';
import { AppRouter } from './router/router';
import { Footer } from './footer';

export const App:React.FC = () => {
  return (
    <>
      <Header/>
      <AppRouter/>
      <Footer/>
    </>
  );
}
