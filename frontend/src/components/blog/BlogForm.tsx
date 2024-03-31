import React from "react";
import { addBlogMutation, updateBlogMutation } from "../../services/mutations";
import { Textarea } from "keep-react";
import { useStoreEdit, useStoreblogData } from "../../store";

const BlogForm: React.FC = () => {
  const addMutation = addBlogMutation();
  const updateMutation = updateBlogMutation();

  const { editBlog, isEdit } = useStoreEdit();
  const { data, setData } = useStoreblogData();

  const onAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userId = "skafshdf39dse34w445";
    try {
      await addMutation.mutateAsync({
        title: data.title,
        userId,
        body: data.body,
      });
    } catch (e) {
      console.log(e);
    }
    setData({ id: "", title: "", body: "" });
  };

  const onUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateMutation.mutateAsync({
        id: data.id as string,
        title: data.title,
        body: data.body,
      });
      setData({ id: "", title: "", body: "" });
    } catch (e) {
      console.log(e);
    }
    editBlog(false);
  };

  return (
    <section className="lg:px-30 md:px-24 sm:px-16 px-10">
      <h1 className="font-medium text-rose-500 text-3xl py-5">Create Blog</h1>
      <form onSubmit={isEdit ? onUpdateSubmit : onAddSubmit}>
        {addMutation.error && (
          <h5 onClick={() => addMutation.reset()}>{`${addMutation.error}`}</h5>
        )}
        <fieldset className="max-w-md flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter Title"
            value={data.title}
            onChange={(e) => setData({ title: e.target.value })}
            autoComplete="false"
            className="ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-600 rounded-md border-none outline-0 py-2 px-3"
          />
        </fieldset>

        <br />

        <fieldset className="max-w-md space-y-1">
          <Textarea
            placeholder="Write here"
            value={data.body}
            onChange={(e) => setData({ body: e.target.value })}
            autoComplete="false"
          />
        </fieldset>
        <button
          type="submit"
          className="text-blue-500 bg-blue-100 mt-2 py-2 px-3 rounded-md font-semibold"
        >
          {isEdit ? "Update Blog" : "Add Blog"}
        </button>
      </form>
    </section>
  );
};

export default BlogForm;
