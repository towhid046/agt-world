import joinGroup from "../../../assets/images/icons/join-group.svg";
import leaveGroupIcon from "../../../assets/images/icons/leave.svg";
import downArrow from "../../../assets/images/icons/down-arrow.svg";
import useAuth from "./../../../hooks/useAuth";
import swal from "sweetalert";

const tabs = [
  { id: 1, title: "All Posts(32)", link: "/" },
  { id: 2, title: "Article", link: "/article" },
  { id: 3, title: "Event", link: "/event" },
  { id: 4, title: "Education", link: "/education" },
  { id: 5, title: "Job", link: "/job" },
];

const NavTab = () => {
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
    <nav className="px-4 pb-3 md:py-10 py-5 sticky lg:top-20 md:top-16 top-12 border-t bg-white z-20">
      {/* for desktop and tabs */}
      <div className="max-w-5xl mx-auto md:flex hidden justify-between ">
        <ul className="flex items-center tab-menu border-b gap-5">
          {tabs?.map((tab) => (
            <li key={tab.id}>
              <a className="pb-3.5 text-[#8A8A8A]" to={tab.link}>
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center gap-4 border-b flex-1 justify-end pb-2.5">
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
            onClick={()=> setIsModalOpen(true)}
            className="flex items-center gap-2 py-2 px-3 bg-color-primary font-medium rounded-[4px] text-white">
              <img src={joinGroup} alt="" />
              <span>Join Group</span>
            </button>
          )}
        </div>
      </div>

      {/* for mobile devices */}
      <div className="flex md:hidden justify-between items-center">
        <h2 className="text-[14px] font-bold">Posts(368)</h2>
        <button className="rounded flex gap-4 items-center py-2 px-2.5 bg-[#F1F3F5]">
          <span className="text-[13px] font-medium">Filter: All</span>
          <img src={downArrow} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default NavTab;
