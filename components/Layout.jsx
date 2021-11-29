import React from 'react';
import {Footer} from '.';
import Header from './Header';
import {ThemeProvider} from 'next-themes';

const Layout = ({children}) => (
  <ThemeProvider attribute="class">
    <div className=" dark:bg-primary dark:text-white">
      <Header />
      <div className="container px-6 mx-auto my-2 md:my-16 sm:px-10">
        {children}
      </div>
      <Footer />
    </div>
  </ThemeProvider>
);

export default Layout;
