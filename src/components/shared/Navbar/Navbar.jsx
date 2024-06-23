import logo from "../../../assets/images/icons/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import downArrow from "../../../assets/images/icons/down-arrow.svg";
import { useState } from "react";
import SignUp from "./../../unique/SignUp/SignUp";
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <nav className="py-5 bg-white sticky top-0 z-20 ">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="cursor-pointer">
            <img src={logo} alt="Logo" />
          </div>

          <div className="w-[360px] py-3 bg-color-gray px-5 rounded-full">
            <div className="flex items-center bg-color-gray">
              <div className="mr-3">
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="bg-color-gray w-full focus:outline-none text-[14px] font-medium"
                placeholder="Search for your favorite groups in ATG"
              />
            </div>
          </div>

          <div>
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="flex items-center gap-1"
            >
              <span className="font-medium text-color-text">
                Create Account.{" "}
              </span>
              <span className="font-bold text-color-primary"> It's free!</span>
              <img src={downArrow} alt="" />
            </button>
          </div>
        </div>
      </nav>
      {/* sing up form */}
      {isModalOpen && (
        <SignUp isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default Navbar;
