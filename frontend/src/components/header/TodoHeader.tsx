import { FaListCheck } from "react-icons/fa6";

const TodoHeader = ({}) => {
  return (
    <div className="flex items-center ">
      <div className="px-2">
        <FaListCheck size={"24px"} color="#099268" />
      </div>
      <div className="px-2 ">
        <p className="font-bold">Todos</p>
        <div className="h-[10px] shadow-inner bg-stone-100 rounded-md min-w-40 overflow-hidden flex items-center">
          <div className={`bg-green-500 w-10 h-[9px]`}></div>
        </div>
      </div>
    </div>
  );
};

export default TodoHeader;
