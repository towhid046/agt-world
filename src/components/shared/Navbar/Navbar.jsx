import logo from "../../../assets/images/icons/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import downArrow from "../../../assets/images/icons/down-arrow.svg";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
import smNavShape1 from "../../../assets/images/icons/sm-nav-shape1.svg";
import smNavShape2 from "../../../assets/images/icons/sm-nav-shape2.svg";
import smNavShape3 from "../../../assets/images/icons/sm-nav-shape3.svg";
import CreateAccount from "../../unique/CreateAccount/CreateAccount";
const Navbar = () => {
  const { user, logOutUser, isModalOpen, setIsModalOpen } = useAuth();
  const [isHover, setIsHover] = useState(false);

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
      <nav className="py-5 bg-white sticky top-0 z-20 px-4 ">
        {/* for desktop */}
        <div className="md:flex hidden container mx-auto justify-between items-center">
          <div className="cursor-pointer">
            <img src={logo} alt="Logo" />
          </div>

          <div className="w-[360px] lg:block hidden py-3 bg-color-gray px-5 rounded-full">
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
                <div
                  onMouseOver={() => setIsHover(!isHover)}
                  className=" flex items-center gap-3 relative cursor-pointer"
                >
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

        {/* for mobile devices */}
        <div className="flex md:hidden gap-3 justify-end">
          <img src={smNavShape1} alt="" />
          <img src={smNavShape2} alt="" />
          <img src={smNavShape3} alt="" />
        </div>
      </nav>

      {/* sing up form */}
      {isModalOpen && (
        <CreateAccount
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default Navbar;
