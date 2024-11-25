import { useState } from "react";
import useValidation from "../../hooks/useValidation";
import { z } from "zod";
import { getInputClassName } from "../../config/utils/validation";
import ErrorMessage from "./ErrorMessage";
import TestAccountInfo from "./TestAccountInfo";
import { loginWithFormData } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email("유효한 이메일 주소를 입력하세요."),
  password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { errors, validate } = useValidation({
    schema,
    formData,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await loginWithFormData(
        formData.email,
        formData.password
      );
      console.log(response);
      if (response.token) {
        alert(response.message);
        navigate("/");
      } else {
        alert(response.details);
      }
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
          onChange={handleChange}
          placeholder="Email"
          className={getInputClassName(!!errors.email)}
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
