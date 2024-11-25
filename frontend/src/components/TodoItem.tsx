import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../api/todosApi";
import { MdDeleteForever } from "react-icons/md";

interface TodoItemProps {
  title: string;
  content: string;
  id: string;
}

const TodoItem = ({ title, content, id }: TodoItemProps) => {
  const queryClient = useQueryClient(); // QueryClient 사용

  const deleteTodoMutation = useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleDeleteTodo = (id: string) => {
    deleteTodoMutation.mutate(id);
  };
  return (
    <div className="flex p-1 my-1 items-center">
      <div className="w-11/12  p-1 min-h-[36px]">
        <div className="flex items-center border-l-4 border-lime-200 min-h-[36px] w-full">
          <div className="custom-checkbox p-2">
            <input type="checkbox" id="checkbox" className="hidden" />
            <label htmlFor="checkbox"></label>
          </div>{" "}
          <div className="">
            <div className="flex">
              <p>{title}</p>
            </div>
            {true && (
              <div className="text-sm text-gray-500 whitespace-pre-wrap">
                {content}
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="p-2" onClick={() => handleDeleteTodo(id)}>
        <MdDeleteForever size={"22px"} color="#d9480f" />
      </button>
    </div>
  );
};

export default TodoItem;
