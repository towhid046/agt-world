import postImg1 from "../../../assets/images/all-posts/img-1.jpeg";
import postImg2 from "../../../assets/images/all-posts/img-2.jpeg";
import postImg3 from "../../../assets/images/all-posts/img-3.jpeg";

import authorImg1 from "../../../assets/images/all-posts/author-1.jpeg";
import authorImg2 from "../../../assets/images/all-posts/author-2.jpeg";
import authorImg3 from "../../../assets/images/all-posts/author-3.jpeg";
import authorImg4 from "../../../assets/images/all-posts/author-4.jpeg";

import Post from "../Post/Post";
import CreatePostIconFixed from './../CreatePostIconFixed/CreatePostIconFixed';

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
  return (
    <>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {/* fixed create post button for mobile and tabs */}
      <CreatePostIconFixed />
    </>
  );
};

export default AllPosts;