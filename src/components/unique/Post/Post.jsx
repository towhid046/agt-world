import PropTypes from "prop-types";
import threeDotsIcon from "../../../assets/images/icons/three-dots.svg";
import shareIcon from "../../../assets/images/icons/share.svg";

import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { PiBagSimple } from "react-icons/pi";

const Post = ({ post }) => {
  return (
    <article key={post.id} className="border rounded mb-5">
      <figure className="rounded-t">
        <img className="w-full rounded-t" src={post?.bannerImg} alt="" />
      </figure>

      <div className="p-5 ">
        <h3 className="md:text-lg text-[14px] md:mb-3 mb-1.5 font-medium ml-5">
          {post?.category}
        </h3>
        <div className="flex justify-between items-start gap-4 md:mb-4 mb-2.5">
          <h2 className="font-semibold md:text-[22px] text-base">
            {post?.title}
          </h2>
          <button className="mt-3">
            <img src={threeDotsIcon} alt="Dot" />
          </button>
        </div>

        {post.category === "Meetup" && (
          <div>
            <div className="flex items-center gap-12 mb-4">
              <div className="flex items-center gap-2">
                <IoMdCalendar className="text-xl" />
                <span className="font-medium text-[15px]">{post?.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineLocationOn className="text-xl" />
                <span className="font-medium text-[15px]">
                  {post?.location}
                </span>
              </div>
            </div>
            <div>
              <button className="w-full py-2.5 border text-color-secondary rounded-lg text-[13px] font-semibold">
                Visit Website
              </button>
            </div>
          </div>
        )}

        {post.category === "Job" && (
          <div>
            <div className="flex items-center gap-12 mb-4">
              <div className="flex items-center gap-2">
                <PiBagSimple className="text-xl" />
                <span className="font-medium text-[15px]">
                  {post?.companyName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineLocationOn className="text-xl" />
                <span className="font-medium text-[15px]">
                  {post?.location}
                </span>
              </div>
            </div>
            <div>
              <button className="w-full py-2.5 border text-[#02B875] rounded-lg text-[13px] font-semibold">
                Apply on Timesjobs
              </button>
            </div>
          </div>
        )}

        {post?.description && (
          <p className="text-[#5C5C5C] font-normal md:text-[19px] text-[14px] mb-5">
            {post?.description?.split("").slice(0, 50).join("")}...
          </p>
        )}
      </div>

      <div className="flex justify-between pt-2 p-5">
        <div className="flex items-center gap-2.5">
          <img
            className="md:w-12 md:h-12 w-9 h-9 rounded-full"
            src={post?.author?.img}
            alt="Author Img"
          />
          <h4 className="text-lg hidden md:flex font-semibold">
            {post?.author?.name}
          </h4>

{/* for mobile devices */}
          <div className="md:hidden ">
            <h4 className="text-[13px] font-semibold">{post?.author?.name}</h4>

            <p className="font-medium text-[12px] text-[#495057]">
              {post?.views}K views
            </p>
          </div>

        </div>

        <div className="flex items-center gap-10">
          <div className="md:flex hidden items-center gap-2">
            <AiOutlineEye />
            <span className="font-medium text-[14px] text-[#495057]">
              {post?.views}K views
            </span>
          </div>
          <div>
            <button className="py-2.5 px-3 bg-color-gray rounded">
              <img src={shareIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
