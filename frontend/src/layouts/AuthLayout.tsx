import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="card h-screen w-screen bg-[#FBFFF7] p-2">
      <div className="w-full max-w-lg shadow-lg bg-white rounded-xl p-8">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
