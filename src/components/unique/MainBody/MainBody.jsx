import { useState } from "react";
import downArrow from "../../../assets/images/icons/down-arrow.svg";

import AllPosts from "./../AllPosts/AllPosts";
import SideBar from "../SideBar/SideBar";
import TabNavLeft from "../TabNavLeft/TabNavLeft";

const tabs = [
  { id: 1, title: "All Posts(32)" },
  { id: 2, title: "Article" },
  { id: 3, title: "Event" },
  { id: 4, title: "Education" },
  { id: 5, title: "Job" },
];

const MainBody = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="mb-10">
      {/* Tab nav */}
      <nav className="sticky lg:top-20 md:top-16 top-12  bg-white z-20 border-t px-4">
        {/* for desktop and tabs */}
        <div className="max-w-5xl mx-auto md:flex items-center justify-between mb-7  pt-8 px-4 hidden border-b">
          <div className="flex items-center  flex-1">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`transition block duration-300 font-normal text-base pb-6 mr-5 ${
                  activeTab === index
                    ? "border-black border-b  text-black"
                    : "text-[#8A8A8A] hover:text-black"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div>
            <TabNavLeft />
          </div>
        </div>

        {/* for mobile devices */}
        <div className="flex md:hidden justify-between items-center py-5">
          <h2 className="text-[14px] font-bold">Posts(368)</h2>
          <button className="rounded flex gap-4 items-center py-2 px-2.5 bg-[#F1F3F5]">
            <span className="text-[13px] font-medium">Filter: All</span>
            <img src={downArrow} alt="" />
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4">
        <div className="lg:grid grid-cols-9 gap-24">
          {/* Tabs contents */}
          <div className="col-span-6 space-y-4 lg:max-h-[70vh] overflow-y-auto no-scrollbar">
            <div>
              {activeTab === 0 && <AllPosts />}
              {activeTab === 1 && <div>Content for Article Tab</div>}
              {activeTab === 2 && <div>Content for Event Tab </div>}
              {activeTab === 3 && <div>Content for Education Tab</div>}
              {activeTab === 4 && <div>Content for Job Tab</div>}
            </div>
          </div>

          <aside className="lg:block hidden col-span-3 mt-12">
            <SideBar />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default MainBody;
