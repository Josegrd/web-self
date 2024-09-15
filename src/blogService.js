import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/blog";

const getAllBlogs = () => {
  return axios.get(API_URL);
};

const createBlog = (newBlog) => {
  return axios.post(API_URL, newBlog);
};

const updateBlog = (id, updatedBlog) => {
  return axios.put(`${API_URL}/${id}`, updatedBlog);
};

const deleteBlog = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
