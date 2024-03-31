import axios from "axios";
import {
  IBlogsData,
  IBlogData,
  ICommentsData,
  ICreateBlog,
  IUpdateBlog,
} from "../types/blog";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getBlogs = async () => {
  const response = (await axiosInstance.get<IBlogsData>("/blog")).data;
  return response?.data.blogs;
};

export const createBlog = async (blog: ICreateBlog) => {
  return await axiosInstance.post<ICreateBlog>("/blog", blog);
};

export const getBlog = async (id: string) => {
  return (await axiosInstance.get<IBlogData>(`/blog/${id}`)).data;
};

export const updateBlog = async (blog: IUpdateBlog) => {
  return await axiosInstance.patch<IUpdateBlog>(`/blog/${blog.id}`, blog);
};

export const deleteBlog = async (id: string) => {
  return await axiosInstance.delete<ICreateBlog>(`/blog/${id}`);
};

export const getBlogComment = async (blogId: string) => {
  return (await axiosInstance.get<ICommentsData>(`comment/${blogId}`)).data;
};
