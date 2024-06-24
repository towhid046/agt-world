import { useState } from "react";
import likeIcon from "../../../assets/images/icons/like.svg";
import groupImg1 from "../../../assets/images/recommended-groups/group-1.jpeg";
import groupImg2 from "../../../assets/images/recommended-groups/group-2.jpeg";
import groupImg3 from "../../../assets/images/recommended-groups/group-3.jpeg";
import groupImg4 from "../../../assets/images/recommended-groups/group-4.jpeg";

const recommendedGroups = [
  { id: 1, img: groupImg1, name: "Leisure", follow: true },
  { id: 2, img: groupImg2, name: "Activism" },
  { id: 3, img: groupImg3, name: "MBA" },
  { id: 4, img: groupImg4, name: "Philosophy" },
];

const RecommendedGroups = () => {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowedGroup = (id) => {
    const targetedGroupIndex = recommendedGroups.findIndex(
      (item) => item.id === id
    );
    recommendedGroups[targetedGroupIndex].follow = recommendedGroups[
      targetedGroupIndex
    ]?.follow
      ? false
      : true;

    setIsFollowed(!isFollowed);
  };

  return (
    <div>
      <div className="flex items-center gap-1 uppercase mb-6 mt-12">
        <img src={likeIcon} alt="" />
        <span className="text-[14px] font-normal">REcommended Groups</span>
      </div>
      <ul className="space-y-5">
        {recommendedGroups?.map((group) => (
          <li key={group.id} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={group.img} alt="" />
              <h5 className="font-normal text-[14px]">{group.name}</h5>
            </div>
            <button
              onClick={() => handleFollowedGroup(group.id)}
              className={`rounded-full py-1 px-3 ${
                group?.follow ? "bg-black text-white" : " bg-[#EDEEF0]"
              }`}
            >
              {group?.follow ? "Followed" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-12 flex justify-end">
        <button className="text-color-primary text-xs font-normal">
          See More...
        </button>
      </div>
    </div>
  );
};

export default RecommendedGroups;
