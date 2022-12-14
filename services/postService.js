import { uploadConfig } from "config/uploadConfig";
import http from "./httpService";
const endpoint = "/posts";

export const uploadPost = (postObject) => {
  const { title, desc, image } = postObject;

  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", desc);
  formData.append("file", image);

  return http.post(endpoint, formData, uploadConfig);
};

export function getPosts() {
  return http.get(endpoint);
}

export function getPost(id) {
  return http.get(`${endpoint}/${id}`);
}

function postUrl(id) {
  return `${endpoint}/${id}`;
}

export function deletePost(postId) {
  http.delete(postUrl(postId));
}

export function makePostComments(id, comment) {
  return http.post(`${endpoint}/${id}/comments`, {
    text: comment.text,
    userId: comment.userId,
  });
}

export function getPostComments(id) {
  return http.get(`${endpoint}/${id}/comments`);
}
