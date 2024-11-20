import React from "react";
import { FaUnlockAlt } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div>
      <div className="text-center p-6 align-center">
        <h1 className="text-2xl font-bold">Welcome!</h1>
        <p className="text-gray-500">Please login to your account.</p>
      </div>
      <div className="flex items-center my-1 p-3 px-5 bg-lime-50 border-[1px] border-lime-100 rounded-xl">
        <FaUnlockAlt size={24} color="darkgreen" />
        <div className="flex flex-col mx-4 text-green-800 text-sm">
          <p>
            <strong>email :</strong> john@gmail.com
          </p>
          <p>
            <strong>password :</strong> &123456
          </p>
        </div>
      </div>
      <form className="flex flex-col space-y-5 mt-7 mb-1">
        <input
          type="email"
          placeholder="Email"
          className="border-none bg-[#f8f9fa] shadow-inner p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-none bg-[#f8f9fa] shadow-inner  p-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-yellow-400 p-3 rounded-lg text-white font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
