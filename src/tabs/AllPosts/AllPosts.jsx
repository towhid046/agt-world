import postImg1 from "../../assets/images/all-posts/img-1.jpeg";
import postImg2 from "../../assets/images/all-posts/img-2.jpeg";
import postImg3 from "../../assets/images/all-posts/img-3.jpeg";
import authorImg1 from "../../assets/images/all-posts/author-1.jpeg";
import authorImg2 from "../../assets/images/all-posts/author-2.jpeg";
import authorImg3 from "../../assets/images/all-posts/author-3.jpeg";
import authorImg4 from "../../assets/images/all-posts/author-4.jpeg";

import penIcon from "../../assets/images/icons/pen.svg";
import crouseIcon from "../../assets/images/icons/crouse.svg";
import infoIcon from "../../assets/images/icons/info.svg";
import { MdOutlineLocationOn } from "react-icons/md";
import Post from "./Post/Post";
import useAuth from "../../hooks/useAuth";
import RecommendedGroups from "./RecommendedGroups/RecommendedGroups";

const posts = [
  {
    id: 1,
    bannerImg: postImg1,
    category: "Article",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei. I’ve worked in UX for the better part of a decade. From now on, I plan to rei",
    views: 1.4,
    author: {
      img: authorImg1,
      name: "Sarthak Kamra",
    },
  },
  {
    id: 2,
    bannerImg: postImg2,
    category: "Education",
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei. I’ve worked in UX for the better part of a decade. From now on, I plan to rei",
    views: 1.4,
    author: {
      img: authorImg2,
      name: "Sarah West",
    },
  },
  {
    id: 3,
    bannerImg: postImg3,
    category: "Meetup",
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    date: "Fri, 12 Oct, 2018",
    location: "Ahmedabad, India",
    views: 1.4,
    author: {
      img: authorImg3,
      name: "Ronal Jones",
    },
  },
  {
    id: 4,
    category: "Job",
    title: "Software Developer",
    companyName: "Innovaccer Analytics Private Ltd.",
    location: "Noida, India",
    views: 1.4,
    author: {
      img: authorImg4,
      name: "Joseph Gray",
    },
  },
];

const AllPosts = () => {
  const { user } = useAuth();
  return (
    <section className="px-4 mb-12">
      <div className="max-w-5xl mx-auto ">
        <div className="grid grid-cols-9 gap-24">
          <div className="col-span-6 space-y-4 max-h-[70dvh] overflow-y-scroll no-scrollbar">
            {posts?.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>

          <aside className="col-span-3 mt-12">
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
                Your location will help us serve better and extend a
                personalised experience.
              </small>
            </div>

            {user && <RecommendedGroups />}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AllPosts;
