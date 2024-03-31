import { useMutation } from "@tanstack/react-query";
import { createBlog, updateBlog, deleteBlog } from "./api";
import { ICreateBlog, IUpdateBlog } from "../types/blog";

export function addBlogMutation() {
  return useMutation({
    mutationFn: (blog: ICreateBlog) => {
      return createBlog(blog);
    },
  });
}

export function updateBlogMutation() {
  return useMutation({
    mutationFn: (blog: IUpdateBlog) => {
      return updateBlog(blog);
    },
  });
}

export function deleteBlogMutation() {
  return useMutation({
    mutationFn: (id: string) => {
      return deleteBlog(id);
    },
  });
}
