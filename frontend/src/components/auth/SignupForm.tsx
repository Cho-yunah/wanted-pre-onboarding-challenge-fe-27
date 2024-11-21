import {
  extractErrors,
  getInputClassName,
} from "../../config/utils/validation";
import { useState } from "react";
import { z } from "zod";
import ErrorMessage from "./ErrorMessage";

interface SignupFormErrors {
  name: string;
  email: string;
  password: string;
}

const schema = z.object({
  name: z.string().min(2, "2글자 이상의 이름을 입력해주세요."),
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
});

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const result = schema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = extractErrors(result.error);
      setErrors({
        name: fieldErrors.name || "",
        email: fieldErrors.email || "",
        password: fieldErrors.password || "",
      });
      return;
    }
    setErrors({} as SignupFormErrors);
  };

  return (
    <div>
      <div className="text-center p-6 align-center">
        <h1 className="text-2xl font-bold">Create Account!</h1>
        <p className="text-gray-500">Sign up to get Started!</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-2 mt-1 mb-1"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className={getInputClassName(!!errors.name)}
        />
        <ErrorMessage message={errors.name} />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className={getInputClassName(!!errors.email)}
        />
        <ErrorMessage message={errors.email} />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className={getInputClassName(!!errors.password)}
        />
        <ErrorMessage message={errors.password} />

        <button
          type="submit"
          className="bg-emerald-400 p-3 rounded-lg text-white font-bold"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
