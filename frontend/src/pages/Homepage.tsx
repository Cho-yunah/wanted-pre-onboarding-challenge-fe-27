import { addTodo, getTodos } from "../api/todosApi";
import TodoHeader from "@components/header/TodoHeader";
import TodoItem from "@components/TodoItem";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, createRef } from "react";
import { useNavigate } from "react-router-dom";

interface Todo {
  title: string;
  content: string;
}

const Homepage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient(); // QueryClient 사용

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!localStorage.getItem("loginToken")) {
    navigate("/auth");
    return null;
  }
  const { data } = useQuery<{ data: Todo }>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const addTodoMutation = useMutation<
    Todo,
    Error,
    { title: string; content: string }
  >({
    mutationFn: ({ title, content }) => addTodo({ title, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const textAreaRef = createRef<HTMLTextAreaElement>();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else {
      setContent(value);
    }
  };

  const handleAddTodo = () => {
    addTodoMutation.mutate({ title, content });
  };

  return (
    <div className="min-h-80 min-w-10/12">
      <TodoHeader />
      <div className="todoContainer ">
        <div className="my-5 p-2 flex-1">
          <div className="flex items-center">
            <input
              type="text"
              name="title"
              placeholder="할 일을 입력하세요"
              onChange={handleInputChange}
              onKeyDown={(e) =>
                e.key === "Enter" && textAreaRef.current?.focus()
              }
              className="w-full my-2 p-2 border-b-2 border-lime-400 mx-1"
            />
            <div className="">
              <button
                onClick={handleAddTodo}
                className="bg-lime-100 text-white p-1 m-1 rounded-md"
              >
                <p className="text-green-500 font-semibold text-sm lineheight-sm">
                  Add Todo
                </p>
              </button>
            </div>
          </div>
          <textarea
            name="content"
            ref={textAreaRef}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
            placeholder="상세 내용을 입력하세요"
            className="w-full p-2 mt-3 border-none shadow-inner bg-lime-50 rounded-md min-h-[100px]"
          />
        </div>
        <div className="flex flex-col flex-1 p-2">
          {data?.data?.length &&
            data.data.map((i: Todo) => <TodoItem key={i.id} {...i} />)}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
