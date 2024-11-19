import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <header>로그인/회원가입을 해주세요</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
