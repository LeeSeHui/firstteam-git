import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* 여기에 각 페이지 내용이 들어감 */}
    </>
  );
};

export default Layout;
