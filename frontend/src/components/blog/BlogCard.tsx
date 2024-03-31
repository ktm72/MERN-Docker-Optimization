import React from "react";
import { Button, Card } from "keep-react";
import toast from "react-hot-toast";
import { IBlog } from "../../types/blog";
//icons
import { MdDelete, MdFavoriteBorder } from "react-icons/md";
import { FaAnglesRight } from "react-icons/fa6";
import {
  IFav,
  useStoreBlogs,
  useStoreEdit,
  useStoreFav,
  useStoreblogData,
} from "../../store";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { deleteBlogMutation } from "../../services/mutations";

interface Props {
  blog: IBlog;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  const { addToFav } = useStoreFav();
  const { editBlog } = useStoreEdit();
  const { setData } = useStoreblogData();
  const { removeFromBlogs } = useStoreBlogs();

  const deleteMutation = deleteBlogMutation();

  const addToFavorite = (id: string, title: string) => {
    const session: IFav[] | [] = JSON.parse(
      sessionStorage.getItem("favorite") || "[]"
    );
    if (session.length > 0) {
      const stored = session.some((fav) => fav.id === id);
      if (stored) {
        toast.error("Already Added.");
      } else {
        addToFav({ id, title });
        sessionStorage.setItem(
          "favorite",
          JSON.stringify([...session, { id, title }])
        );
        toast.success("Added To Favorite.");
      }
    } else {
      addToFav({ id, title });
      sessionStorage.setItem("favorite", JSON.stringify([{ id, title }]));
      toast.success("Added To Favorite.");
    }
  };

  const onEditHandler = () => {
    editBlog(true);
    const data = {
      id: blog._id,
      title: blog.title,
      body: blog.body,
    };
    setData(data);
  };

  const onDeleteHandler = async () => {
    try {
      await deleteMutation.mutateAsync(blog._id);
      removeFromBlogs(blog._id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <Card className="p-6 w-full">
        <Card.Container className="flex items-start md:gap-5 gap-3.5">
          <Card.Container className="w-full flex flex-col gap-2">
            <div className="w-inherit flex justify-between gap-1">
              <Link to={`/blog/${blog._id}`}>
                <Card.Title>{blog.title}</Card.Title>
              </Link>
              <div className="flex gap-1">
                <Button
                  onClick={onEditHandler}
                  size="xs"
                  type="outlineGray"
                  key={`${blog._id}-edit`}
                >
                  <span>
                    <CiEdit size={16} color="#444" />
                  </span>
                </Button>
                <Button
                  onClick={onDeleteHandler}
                  size="xs"
                  type="outlineGray"
                  key={`${blog._id}-delete`}
                >
                  <span>
                    <MdDelete size={16} color="#444" />
                  </span>
                </Button>
                <Button
                  onClick={() => addToFavorite(blog._id, blog.title)}
                  size="xs"
                  type="outlineGray"
                  key={`${blog._id}-favorite`}
                >
                  <span>
                    <MdFavoriteBorder size={16} color="#444" />
                  </span>
                </Button>
              </div>
            </div>
            <Card.Description>
              {blog.body.substring(0, 150)} ...
            </Card.Description>

            <Link to={`/blog/${blog._id}`}>
              <Button type="default" size="xs">
                <span className="pr-2">
                  <FaAnglesRight size={14} />
                </span>
                Read More
              </Button>
            </Link>
          </Card.Container>
        </Card.Container>
      </Card>
    </React.Fragment>
  );
};

export default BlogCard;
