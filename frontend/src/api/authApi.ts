const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loginWithFormData = async (email: string, password: string) => {
  // const queryParams = new URLSearchParams({ email, password });
  // console.log(API_BASE_URL, queryParams);

  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  localStorage.setItem("loginToken", data.token);
  return data;
};

export const signupWithFormData = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await fetch(`${API_BASE_URL}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  if (!response.ok) {
    throw new Error("회원가입에 실패했습니다.");
  } else {
    const data = await response.json();
    localStorage.setItem("loginToken", data.token);
  }
  const data = await response.json();
  localStorage.setItem("loginToken", data.token);
};
