import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <header className="text-2xl font-bold text-center mb-6 text-red-800">
          로그인 / 회원가입
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
