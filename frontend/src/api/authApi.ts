const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loginWithFormData = async (email: string, password: string) => {
  // const queryParams = new URLSearchParams({ email, password });
  console.log(API_BASE_URL, queryParams);

  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // JSON 요청임을 명시
    },
    body: JSON.stringify({ email, password }), // JSON 형식으로 본문 전달
  });
  console.log(response);
};

export const signupWithFormData = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await fetch(`${API_BASE_URL}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // JSON 요청임을 명시
    },
    body: JSON.stringify({ name, email, password }), // JSON 형식으로 본문 전달
  });
  console.log(response);
};
