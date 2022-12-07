import { uploadConfig } from "config/uploadConfig";
import http from "./httpService";

export const getCategories = () => {
  return http.get("/category");
};

export const getCategory = (param) => {
  return http.get(`/category/${param}`);
};

export const uploadCategory = ({ name, image }) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("file", image);

  return http.post("/category", formData, uploadConfig);
};
