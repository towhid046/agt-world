import { useState } from "react";
import closeIcon from "../../../assets/images/icons/close.svg";
import closeIcon2 from "../../../assets/images/icons/close2.svg";
import PropTypes from "prop-types";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import useAuth from "../../../hooks/useAuth";

const CreateAccount = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { setIsModalOpen, isModalOpen } = useAuth();

  return (
    <section className="fixed bg-black bg-opacity-70 w-full lg:top-0 bottom-0 flex justify-center md:items-center items-end min-h-screen z-50">
      <div className="rounded-lg relative bg-white">
        {/* close button */}
        <div className="lg:absolute lg:-top-9 lg:-right-3 ">
          <button onClick={() => setIsModalOpen(!isModalOpen)}>
            <img src={closeIcon} alt="" />
          </button>
        </div>

        <div className="bg-[#EFFFF4] lg:block hidden py-4 rounded-t-lg mb-6 px-20">
          <p className="text-[#008A45] text-[14px] font-medium text-center">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>

        <div className="flex items-center justify-between md:px-12 px-6  ">
          <h2 className="lg:text-2xl text-lg font-bold">
            {isToggle ? "Sign In" : "Create Account"}
          </h2>
          <div className="lg:flex hidden items-center gap-2">
            <p>
              {isToggle
                ? "Don’t have an account yet?"
                : "Already have an account? "}
            </p>
            <button
              onClick={() => setIsToggle(!isToggle)}
              className="text-color-primary font-semibold"
            >
              {isToggle ? "Create new for free!" : "Sign In"}
            </button>
          </div>
          {/* for mobile and tabs */}
          <div className="lg:hidden">
            <button onClick={() => setIsModalOpen(!isModalOpen)}>
              <img src={closeIcon2} alt="" />
            </button>
          </div>
        </div>
        {isToggle ? (
          <SignIn setIsToggle={setIsToggle} isToggle={isToggle} />
        ) : (
          <SignUp setIsToggle={setIsToggle} isToggle={isToggle} />
        )}
      </div>
    </section>
  );
};

CreateAccount.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

export default CreateAccount;
