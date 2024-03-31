import { create } from "zustand";
import { IBlog } from "../types/blog";

interface IData {
  id?: string;
  title: string;
  body: string;
}

export interface IFav {
  id: string;
  title: string;
}

type blogDataStore = {
  data: IData;
  setData: (d: any) => void;
};

export const useStoreblogData = create<blogDataStore>()((set) => ({
  data: { id: "", title: "", body: "" },
  setData: (d) => set((s) => ({ data: { ...s.data, ...d } })),
}));

type editStore = {
  isEdit: boolean;
  editBlog: (data: boolean) => void;
};

export const useStoreEdit = create<editStore>()((set) => ({
  isEdit: false,
  editBlog: (data) => set(() => ({ isEdit: data })),
}));

type StoreFavorite = {
  favs: IFav[] | [];
  addToFav: (data: IFav) => void;
  removeFromFav: (id: string) => void;
};

export const useStoreFav = create<StoreFavorite>()((set) => ({
  favs: [],
  addToFav: (data: IFav) => set((state) => ({ favs: [...state.favs, data] })),
  removeFromFav: (id: string) =>
    set((state) => ({ favs: state.favs.filter((fav) => fav.id !== id) })),
}));

type storeBlogs = {
  blogs: IBlog[] | [];
  setBlogs: (data: IBlog[]) => void;
  removeFromBlogs: (id: string) => void;
};

export const useStoreBlogs = create<storeBlogs>()((set) => ({
  blogs: [],
  setBlogs: (data: IBlog[]) => set(() => ({ blogs: data })),
  removeFromBlogs: (id: string) =>
    set((state) => ({ blogs: state.blogs.filter((blog) => blog._id !== id) })),
}));
