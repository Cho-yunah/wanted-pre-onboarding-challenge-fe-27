import React from "react";

const SignupForm = () => {
  return (
    <div>
      <div className="text-center p-6 align-center">
        <h1 className="text-2xl font-bold">Create Account!</h1>
        <p className="text-gray-500">Sign up to get Started!</p>
      </div>
      <form className="flex flex-col space-y-6 mt-2 mb-1">
        <input
          type="name"
          placeholder="Your Name"
          className="border-none bg-[#f8f9fa] shadow-inner p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border-none bg-[#f8f9fa] shadow-inner p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-none bg-[#f8f9fa] shadow-inner p-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-lime-500 p-3 rounded-lg text-white font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
