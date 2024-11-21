import { useState } from "react";
import { z } from "zod";
import {
  extractErrors,
  getInputClassName,
} from "../../config/utils/validation";
import ErrorMessage from "./ErrorMessage";
import TestAccountInfo from "./TestAccountInfo";
import { loginWithFormData } from "../../api/authApi";

interface LoginFormErrors {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
});

const LoginForm = () => {
  const [errors, setErrors] = useState<LoginFormErrors>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

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
    try {
      loginWithFormData(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="text-center p-6 align-center">
        <h1 className="text-2xl font-bold">Welcome!</h1>
        <p className="text-gray-500">Please login to your account.</p>
      </div>
      <TestAccountInfo />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-7 mb-1 space-y-2"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={getInputClassName(!!errors.email)}
        />
        <ErrorMessage message={errors.email} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={getInputClassName(!!errors.password)}
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
