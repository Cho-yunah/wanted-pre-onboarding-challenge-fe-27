import { FaUnlockAlt } from "react-icons/fa";

const TestAccountInfo = () => {
  return (
    <div className="flex items-center my-1 p-3 px-5 bg-lime-50 border-[1px] border-lime-100 rounded-xl">
      <FaUnlockAlt size={24} color="darkgreen" />
      <div className="flex flex-col mx-4 text-green-800 text-sm">
        <p>
          <strong>email :</strong> john@gmail.com
        </p>
        <p>
          <strong>password :</strong> &123456
        </p>
      </div>
    </div>
  );
};

export default TestAccountInfo;
