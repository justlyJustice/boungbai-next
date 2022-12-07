/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";
import { uploadConfig } from "config/uploadConfig";

export const getCourses = () => {
  return http.get("/courses");
};

export const getCourse = (courseName) => {
  return http.get(`/courses/${courseName}`);
};

export const uploadCourse = (categoryId, course) => {
  const formData = new FormData();

  formData.append("name", course.name);
  formData.append("file", course.file);
  formData.append("author", course.author);
  formData.append("price", course.price);
  formData.append("description", course.description);

  return http.post(`/${categoryId}/courses`, formData, uploadConfig);
};

export const verifyCoursePurchase = async (courseId, reference) => {
  return await http.get(`/courses/${courseId}/verify?reference=${reference}`);
};

export default {
  getCourse,
  getCourses,
};
