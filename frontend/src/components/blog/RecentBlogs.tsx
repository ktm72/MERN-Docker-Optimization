import React, { useEffect } from "react";
import { useBlogsQuery } from "../../services/queries";
import BlogCard from "./BlogCard";
import { useStoreBlogs } from "../../store";

const RecentBlogs: React.FC = () => {
  const { data, isError } = useBlogsQuery();
  const { blogs, setBlogs } = useStoreBlogs();

  if (isError) {
    return "There is an error";
  }

  useEffect(() => {
    if (data) {
      setBlogs(data);
    }
  }, [data]);

  return (
    <section className="lg:px-30 md:px-24 sm:px-16 px-10">
      <h1 className="font-medium text-rose-500 text-3xl py-5">Recent Blogs</h1>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        {blogs.length > 0
          ? blogs.map((blog) => <BlogCard blog={blog} key={blog._id} />)
          : null}
      </div>
    </section>
  );
};

export default RecentBlogs;
