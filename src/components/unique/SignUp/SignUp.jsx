import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import facebookIcon from "../../../assets/images/icons/facebook.svg";
import googleIcon from "../../../assets/images/icons/google.svg";
import closeIcon from "../../../assets/images/icons/close.svg";
import singUpImg from "../../../assets/images/sign-up/sign-up-img.jpeg";
import PropTypes from "prop-types";

const formData = [
  { id: 1, placeholder: "First Name", type: "text" },
  { id: 2, placeholder: "Last Name", type: "text" },
  { id: 3, placeholder: "Email", type: "email" },
  { id: 4, placeholder: "Password", type: "password" },
  { id: 5, placeholder: "Confirm Password", type: "password" },
];

const SignUp = ({ setIsModalOpen, isModalOpen }) => {
  const [isShowPass, setIsShowPass] = useState(false);

  return (
    <section className="fixed bg-black bg-opacity-70 w-full top-0 flex justify-center items-center min-h-screen z-50">
      <div className="rounded-lg relative bg-white">
        {/* close button */}
        <div className="absolute -top-9 -right-3">
          <button onClick={() => setIsModalOpen(!isModalOpen)}>
            <img src={closeIcon} alt="" />
          </button>
        </div>

        <div className="bg-[#EFFFF4] py-4 rounded-t-lg mb-6">
          <p className="text-[#008A45] text-[14px] font-medium text-center">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>

        <div className="flex items-center justify-between px-12">
          <h2 className="text-2xl font-bold">Create Account</h2>
          <div className="flex items-center gap-2">
            <p>Already have an account? </p>
            <button className="text-color-primary font-semibold">
              Sign In
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5 justify-between px-12 pb-12 pt-6">
          {/* sing up form */}
          <div>
            <form action="">
              <div className="grid grid-cols-2">
                {formData?.map((data) => (
                  <div
                    key={data.id}
                    className={` 
                      relative 
                      ${data.type === "text" ? "col-span-1" : "col-span-2"}
                      `}
                  >
                    <input
                      className={`
                        ${data.placeholder === "First Name" && "rounded-tl-md"}
                        ${data.placeholder === "Last Name" && "rounded-tr-md "}
                        border bg-[#F7F8FA] p-2.5 w-full ${
                          data.placeholder !== "Confirm Password" &&
                          "border-b-0"
                        } focus:outline-none focus:border focus:border-color-primary font-medium text-[15px] text-[#8A8A8A]
                        ${
                          data.placeholder === "Confirm Password" &&
                          "rounded-b-md border"
                        }
                        
                        `}
                      placeholder={data.placeholder}
                      type={
                        data.placeholder !== "Password"
                          ? data.type
                          : isShowPass
                          ? "text"
                          : "password"
                      }
                    />
                    {data.placeholder === "Password" && (
                      <div
                        onClick={() => setIsShowPass(!isShowPass)}
                        className="cursor-pointer text-lg absolute right-4 top-4 z-50"
                      >
                        {isShowPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <input
                  className="w-full text-[14px] text-white font-semibold rounded-full py-3 bg-color-primary"
                  type="submit"
                  value="Create Account"
                />
              </div>
            </form>

            <div className="mt-6 space-y-2">
              <button className="w-full flex items-center gap-5 justify-center border rounded py-2.5">
                <img src={facebookIcon} alt="" />
                <span className="text-[14px] font-normal">
                  Sign up with Facebook
                </span>
              </button>

              <button className="w-full flex items-center gap-5 justify-center border rounded py-2.5">
                <img src={googleIcon} alt="" />
                <span className="text-[14px] font-normal">
                  Sign up with Google
                </span>
              </button>
            </div>
          </div>

          {/* sing up image */}

          <div className="flex flex-col justify-center items-center">
            <img className="mb-3 " src={singUpImg} alt="Sign up img" />
            <p className="font-normal text-[11px]">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

SignUp.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

export default SignUp;
