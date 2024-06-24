import downArrow from "../../../assets/images/icons/down-arrow.svg";
import leaveGroupIcon from "../../../assets/images/icons/leave.svg";
import joinGroup from "../../../assets/images/icons/join-group.svg";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";

const TabNavLeft = () => {
  const { user, logOutUser, setIsModalOpen } = useAuth();

  const handleLogOutUser = async () => {
    try {
      await logOutUser();
      swal("Log Out success", "User logout success", "success");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex items-center gap-4 flex-1  ">
    <button className="flex items-center gap-2 py-2 px-3 bg-color-gray font-medium rounded-[4px]">
      <span>Write a Post</span>
      <img src={downArrow} alt="" />
    </button>

    {user ? (
      <button
        onClick={handleLogOutUser}
        className="flex items-center gap-2 py-2 px-3 border font-medium rounded-[4px]"
      >
        <img src={leaveGroupIcon} alt="" />
        <span>Leave Group</span>
      </button>
    ) : (
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 py-2 px-3 bg-color-primary font-medium rounded-[4px] text-white"
      >
        <img src={joinGroup} alt="" />
        <span>Join Group</span>
      </button>
    )}
  </div>
  )
}

export default TabNavLeft