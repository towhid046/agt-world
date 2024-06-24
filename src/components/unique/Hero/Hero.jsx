import swal from "sweetalert";
import bannerImg from "../../../assets/images/banner-img.png";
import leftArrowIcon from "../../../assets/images/icons/arrow-left.svg";
import useAuth from "../../../hooks/useAuth";

const Hero = () => {
  const { user, setIsModalOpen, logOutUser } = useAuth();

  const handleLogOutUser = async () => {
    try {
      await logOutUser();
      swal("Log Out success", "User logout success", "success");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <section
      style={{ backgroundImage: `url(${bannerImg})` }}
      className="bg-cover bg-center bg-no-repeat relative"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="p-5 flex justify-between  relative md:hidden">
        <img className="cursor-pointer" src={leftArrowIcon} />
        {user ? (
          <button
            onClick={handleLogOutUser}
            className="border bg-transparent py-2 px-2.5 rounded text-white "
          >
            Leave Group
          </button>
        ) : (
          <button
            onClick={() => setIsModalOpen(true)}
            className="border bg-transparent py-2 px-2.5 rounded text-white "
          >
            Join Group
          </button>
        )}
      </div>

      <div className="relative z-10 pt-40 md:pt-[268px] pb-8  md:pb-[80px] pl-5 md:pl-[200px] text-white">
        <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl">
          Computer Engineering
        </h2>
        <p className="lg:text-lg md:text-base text-xs font-normal">
          142,765 Computer Engineers follow this
        </p>
      </div>
    </section>
  );
};

export default Hero;
