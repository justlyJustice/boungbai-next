import http from "./httpService";
import { uploadConfig } from "config/uploadConfig";

export const getLectures = () => {
  return http.get("/lectures");
};

export const getLecture = (lectureName) => {
  return http.get(`/lectures/${lectureName}`);
};

export const uploadLecture = (courseId, lecture) => {
  const formData = new FormData();

  formData.append("name", lecture.name);
  formData.append("file", lecture.file);

  return http.post(`/${courseId}/lectures`, formData, uploadConfig);
};
