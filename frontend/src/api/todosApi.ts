const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getTodos = async () => {
  const token = localStorage.getItem("loginToken") || "";
  const headers = new Headers();
  headers.append("Authorization", token);

  const data = await fetch(`${API_BASE_URL}/todos`, { headers }).then(
    (response) => response.json()
  );
  return data;
};

export const addTodo = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  console.log(title, content);
  const token = localStorage.getItem("loginToken") || "";
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Content-Type", "application/json");

  const response = await fetch(`${API_BASE_URL}/todos`, {
    method: "POST",
    headers,
    body: JSON.stringify({ title, content }),
  });

  const data = await response.json();
  return data;
};

export const deleteTodo = async (id: string) => {
  const token = localStorage.getItem("loginToken") || "";
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Content-Type", "application/json");

  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: "DELETE",
    headers,
  });
  const data = await response.json();

  return data;
};
