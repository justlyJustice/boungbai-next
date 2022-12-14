/* eslint-disable import/no-anonymous-default-export */
import { create } from "apisauce";
import { toast } from "react-toastify";

import url from "config/url";

const apiClient = create({
  baseURL: url,
});

apiClient.axiosInstance.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occured", {
      autoClose: 3000,
      closeButton: true,
      type: "error",
    });
  }

  return Promise.reject(error);
});

export const setJwt = (jwt) => {
  apiClient.headers["x-auth-token"] =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjMyM2E0ODY5YzFkMTMyNjRhYTQ4NiIsIm5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AYm91bmdiYWkuY29tIiwic2F2ZWRDb3Vyc2VzIjpbXSwiaWF0IjoxNjYzNjg1OTMwfQ.EY1Un9rGXLhFxbx3CQM_UvuMjn4jOntrYmewDBs_tbU";
};

export default {
  get: apiClient.get,
  post: apiClient.post,
  put: apiClient.put,
  delete: apiClient.delete,
  setJwt,
};
