import { useState } from "react";
import { z } from "zod";
import {
  extractErrors,
  getInputClassName,
} from "../../config/utils/validation";
import ErrorMessage from "./ErrorMessage";
import TestAccountInfo from "./TestAccountInfo";
import { loginWithFormData } from "../../api/authApi";

interface LoginForm {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
});

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value || "",
    });
  };

  const handleValidation = () => {
    const result = schema.safeParse({ ...formData });
    if (!result.success) {
      const fieldErrors = extractErrors(result.error);
      setErrors({
        email: fieldErrors.email || "",
        password: fieldErrors.password || "",
      });
      return;
    }
    setErrors({} as LoginForm);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleValidation();
    if (Object.values(errors).some((error) => error)) {
      return;
    }

    try {
      loginWithFormData(formData.email, formData.password);
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
          value={formData?.email}
          placeholder="Email"
          className={getInputClassName(!!errors.email)}
          onChange={handleChange}
        />
        <ErrorMessage message={errors.email} />
        <input
          type="password"
          name="password"
          value={formData?.password}
          placeholder="Password"
          className={getInputClassName(!!errors.password)}
          onChange={handleChange}
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
