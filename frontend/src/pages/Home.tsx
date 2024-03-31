import React from "react";
import RecentBlogs from "../components/blog/RecentBlogs";
import BlogForm from "../components/blog/BlogForm";

const Home: React.FC = () => {
  return (
    <div>
      <BlogForm />
      <RecentBlogs />
    </div>
  );
};

export default Home;
