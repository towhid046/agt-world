import { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import facebookIcon from "../../../assets/images/icons/facebook.svg";
import googleIcon from "../../../assets/images/icons/google.svg";
import singUpImg from "../../../assets/images/sign-up/sign-up-img.jpeg";
import useAuth from "../../../hooks/useAuth";
import PropTypes from "prop-types";

const formData = [
  { id: 1, name: "firstName", placeholder: "First Name", type: "text" },
  { id: 2, name: "lastName", placeholder: "Last Name", type: "text" },
  { id: 3, name: "email", placeholder: "Email", type: "email" },
  { id: 4, name: "password", placeholder: "Password", type: "password" },
  {
    id: 5,
    name: "confirmPassword",
    placeholder: "Confirm Password",
    type: "password",
  },
];

const SignUp = ({ setIsToggle, isToggle }) => {
  const { register, handleSubmit } = useForm();
  const [isShowPass, setIsShowPass] = useState(false);
  const { createUser, logInWithGoogle, updateUserProfile, setIsModalOpen } =
    useAuth();

  const handleSignUpFormSubmission = async (data) => {
    if (data.password !== data.confirmPassword) {
      return swal(
        "Oops!",
        `Confirm password doesn't match with password`,
        "error"
      );
    }
    const name = `${data.firstName} ${data.lastName}`;
    const photoUrl = `https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600`;

    try {
      setIsModalOpen(false);
      await createUser(data?.email, data?.password);
      await updateUserProfile(name, photoUrl);
      swal("Success", "User login success", "success");
    } catch (error) {
      swal("Opps!", `${error.message}`, "error");
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
    <div className="flex flex-col lg:flex-row items-center gap-5 justify-between px-6 md:px-12 md:pb-12 pb-6 lg:pt-6 pt-4 ">
      {/* sing up form */}
      <div>
        <form onSubmit={handleSubmit(handleSignUpFormSubmission)}>
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
                  {...register(data.name)}
                  className={`
                ${data.placeholder === "First Name" && "rounded-tl-md"}
                ${data.placeholder === "Last Name" && "rounded-tr-md "}
                border bg-[#F7F8FA] p-2.5 w-full ${
                  data.placeholder !== "Confirm Password" &&
                  "border-b-[#F7F8FA]"
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
                  required
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
              value="Create Account"
            />
            <button
              onClick={() => setIsToggle(!isToggle)}
              className="underline lg:hidden text-[13px] font-medium"
            >
              Or, Sign In
            </button>
          </div>
        </form>

        <div className="mt-6 space-y-2">
          <button className="w-full flex items-center gap-5 justify-center border rounded py-2.5">
            <img src={facebookIcon} alt="" />
            <span className="text-[14px] font-normal">
              Sign up with Facebook
            </span>
          </button>

          <button
            onClick={handleLogInUserWithGoogle}
            className="w-full flex items-center gap-5 justify-center border rounded py-2.5"
          >
            <img src={googleIcon} alt="" />
            <span className="text-[14px] font-normal">Sign up with Google</span>
          </button>
        </div>
      </div>

      {/* sing up image */}

      <div className="flex flex-col justify-center items-center">
        <img className="mb-3 lg:block hidden" src={singUpImg} alt="Sign up img" />
        <p className="font-normal text-[11px]">
          By signing up, you agree to our Terms & conditions, Privacy policy
        </p>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  setIsToggle: PropTypes.func.isRequired,
  isToggle: PropTypes.bool.isRequired,
};

export default SignUp;
