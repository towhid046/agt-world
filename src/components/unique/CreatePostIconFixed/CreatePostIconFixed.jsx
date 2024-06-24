import { FaPencilAlt } from "react-icons/fa";
const CreatePostIconFixed = () => {
  return (
    <div className="fixed md:hidden bottom-4 right-4">
      <button className="text-white flex justify-center shadow-xl items-center w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#ff5c5c] to-[#f0568a] ">
        <FaPencilAlt className="text-lg" />
      </button>
    </div>
  );
};

export default CreatePostIconFixed;
