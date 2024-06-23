import PropTypes from "prop-types";
import threeDotsIcon from "../../../assets/images/icons/three-dots.svg";
import shareIcon from "../../../assets/images/icons/share.svg";

import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { PiBagSimple } from "react-icons/pi";

const Post = ({ post }) => {
  return (
    <article key={post.id} className="border rounded">
      <figure className="rounded-t">
        <img className="w-full rounded-t" src={post?.bannerImg} alt="" />
      </figure>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-medium ml-5">{post?.category}</h3>
        <div className="flex justify-between items-start">
          <h2 className="font-semibold text-[22px]">{post?.title}</h2>
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
          <p className="text-[#5C5C5C] font-normal text-[19px]">
            {post?.description?.split("").slice(0, 50).join("")}...
          </p>
        )}
      </div>

      <div className="flex justify-between pt-2 p-5">
        <div className="flex items-center gap-2.5">
          <img
            className="w-12 h-12 rounded-full"
            src={post?.author?.img}
            alt="Author Img"
          />
          <h4 className="text-lg font-semibold">{post?.author?.name}</h4>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <AiOutlineEye />
            <span className="font-medium text-[14px]">
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
