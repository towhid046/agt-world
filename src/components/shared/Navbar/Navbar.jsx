import logo from "../../../assets/images/icons/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import downArrow from "../../../assets/images/icons/down-arrow.svg";
import { useState } from "react";
import SignUp from "./../../unique/SignUp/SignUp";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, logOutUser } = useAuth();

  const handleLogOutUser = async () => {
    try {
      await logOutUser();
      swal("Log Out success", "User logout success", "success");
    } catch (error) {
      console.error(error.message);
    }
  };

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
            {user ? (
              <div className="user-menu relative ">
                <div className=" flex items-center gap-3 relative cursor-pointer">
                  <img
                    className="w-9 h-9 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                  <span className="font-medium text-color-text">
                    {user?.displayName}
                  </span>
                  <img src={downArrow} alt="" />
                </div>
                <ul className="user-profile z-50  absolute top-8 rounded-tl-2xl right-0 bg-white px-10 py-5 space-y-2 font-semibold">
                  <li className="hover:text-color-primary">
                    <button>Profile</button>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOutUser}
                      className="text-color-secondary"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="flex items-center gap-1"
              >
                <span className="font-medium text-color-text">
                  Create Account.{" "}
                </span>
                <span className="font-bold text-color-primary">
                  {" "}
                  It's free!
                </span>
                <img src={downArrow} alt="" />
              </button>
            )}
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
