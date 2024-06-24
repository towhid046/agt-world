import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import facebookIcon from "../../../assets/images/icons/facebook.svg";
import googleIcon from "../../../assets/images/icons/google.svg";
import singUpImg from "../../../assets/images/sign-up/sign-up-img.jpeg";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
import PropTypes from "prop-types";

const formData2 = [
  { id: 3, name: "email", placeholder: "Email", type: "email" },
  { id: 4, name: "password", placeholder: "Password", type: "password" },
];

const SignIn = ({ setIsToggle, isToggle }) => {
  const { register, handleSubmit } = useForm();
  const [isShowPass, setIsShowPass] = useState(false);
  const { logInWithGoogle, loginUser, setIsModalOpen } = useAuth();

  const handleSignInFormSubmission = async (data) => {
    try {
      setIsModalOpen(false);
      await loginUser(data?.email, data?.password);
      swal("Success", "User login success", "success");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogInUserWithGoogle = async () => {
    try {
      await logInWithGoogle();
      setIsModalOpen(false);
      swal("Success", "User login success", "success");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex items-center gap-5 justify-between px-6 md:px-12 md:pb-12 pb-16 lg:pt-6 pt-4 w-full">
      {/* sing In form */}
      <div className="lg:flex-1 w-full">
        <form onSubmit={handleSubmit(handleSignInFormSubmission)} action="">
          <div className="grid grid-cols-2">
            {formData2?.map((data) => (
              <div key={data.id} className={`relative col-span-2 w-full`}>
                <input
                  {...register(data.name)}
                  className={`
                  ${
                    data.placeholder === "Email" &&
                    "rounded-t-md  border-b-[#F7F8FA] "
                  }
                ${data.placeholder === "Password" && "rounded-b-md"}
                border bg-[#F7F8FA] p-2.5 w-full focus:outline-none focus:border focus:border-color-primary font-medium text-[15px] text-[#8A8A8A]
                ${
                  data.placeholder === "Confirm Password" &&
                  "rounded-b-md border"
                }
                
                `}
                  placeholder={data.placeholder}
                  required
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

          <div className="mt-5 lg:block flex justify-between  gap-5">
            <input
              className="lg:w-full cursor-pointer text-[14px] text-white font-semibold rounded-full md:py-3 px-6 py-2.5  bg-color-primary"
              type="submit"
              value="Sign In"
            />
            <button
              onClick={() => setIsToggle(!isToggle)}
              className="underline lg:hidden text-[13px] font-medium"
            >
              Or, Create Account
            </button>
          </div>
        </form>

        <div className="mt-6 space-y-2">
          <button
            onClick={() =>
              swal(
                "Sorry!!",
                "Currently Facebook sign In not available, Try so sing In with  google or email",
                "info"
              )
            }
            className="w-full flex items-center gap-4 justify-center border rounded py-2.5"
          >
            <img src={facebookIcon} alt="" />
            <span className="text-[14px] font-normal">
              Sign In with Facebook
            </span>
          </button>

          <button
            onClick={handleLogInUserWithGoogle}
            className="w-full flex items-center gap-4 justify-center border rounded py-2.5"
          >
            <img src={googleIcon} alt="" />
            <span className="text-[14px] font-normal">Sign In with Google</span>
          </button>

          <div className="text-center pt-3">
            <button className="text-xs font-medium hover:underline">
              Forget Password
            </button>
          </div>
        </div>
      </div>

      {/* sing in image */}

      <div className="lg:flex hidden lg:flex-1 flex-col justify-center items-center">
        <img className="mb-3 " src={singUpImg} alt="Sign up img" />
      </div>
    </div>
  );
};

SignIn.propTypes = {
  setIsToggle: PropTypes.func.isRequired,
  isToggle: PropTypes.bool.isRequired,
};

export default SignIn;
