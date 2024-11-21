import { useState } from "react";
import { FaUnlockAlt } from "react-icons/fa";
import { z } from "zod";
import { extractErrors } from "../../config/utils/validation";
import ErrorMessage from "./ErrorMessage";

interface LoginFormErrors {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
});

const LoginForm = () => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const result = schema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors = extractErrors(result.error);
      setErrors({
        email: fieldErrors.email || "",
        password: fieldErrors.password || "",
      });
      return;
    }
    setErrors({} as LoginFormErrors);
    console.log("폼 제출 성공:", result.data);
  };

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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-7 mb-1 space-y-2"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`bg-[#f8f9fa] shadow-inner p-3 rounded-lg ${
            errors.email ? "border-red-500 border-[1px]" : "mb-5"
          }`}
        />
        <ErrorMessage message={errors.email} />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className={`bg-[#f8f9fa] shadow-inner p-3 rounded-lg ${
            errors.password ? "border-red-500 border-[1px]" : "!mb-5"
          }`}
        />
        <ErrorMessage message={errors.password} />

        <button
          type="submit"
          className="bg-yellow-400 p-3 mt-5 rounded-lg text-white font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
