import { MdOutlineLocationOn } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import penIcon from "../../../assets/images/icons/pen.svg";
import infoIcon from "../../../assets/images/icons/info.svg";
import crouseIcon from "../../../assets/images/icons/crouse.svg";
import RecommendedGroups from "./../RecommendedGroups/RecommendedGroups";

const SideBar = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="border-b pb-2.5 flex items-center gap-1 justify-between">
        <div>
          <MdOutlineLocationOn className="text-xl" />
        </div>
        <input
          type="text"
          className=" w-full focus:outline-none text-[14px] font-medium"
          placeholder={user ? "Enter your location" : "Nodia, India"}
          disabled={!user}
        />
        <div>
          <img
            className="cursor-pointer"
            src={user ? crouseIcon : penIcon}
            alt=""
          />
        </div>
      </div>

      <div className="flex gap-2 items-start mt-8">
        <img className="mt-1 opacity-50" src={infoIcon} alt="" />
        <small className="text-xs text-gray-500">
          Your location will help us serve better and extend a personalised
          experience.
        </small>
      </div>
      {user && <RecommendedGroups />}
    </>
  );
};

export default SideBar;
