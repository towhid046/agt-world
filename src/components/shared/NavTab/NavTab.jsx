import joinGroup from "../../../assets/images/icons/join-group.svg";
import downArrow from "../../../assets/images/icons/down-arrow.svg";

const tabs = [
  { id: 1, title: "All Posts(32)", link: "/" },
  { id: 2, title: "Article", link: "/article" },
  { id: 3, title: "Event", link: "/event" },
  { id: 4, title: "Education", link: "/education" },
  { id: 5, title: "Job", link: "/job" },
];

const NavTab = () => {
  return (
   <nav className="px-4 pb-3 py-10 sticky top-20 border-t bg-white z-50">
     <div className="max-w-5xl mx-auto    flex justify-between ">
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

        <button className="flex items-center gap-2 py-2 px-3 bg-color-primary font-medium rounded-[4px] text-white">
          <img src={joinGroup} alt="" />
          <span>Join Group</span>
        </button>
      </div>
    </div>
   </nav>
  );
};

export default NavTab;
