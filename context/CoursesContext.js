/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { createContext } from "react";

import { getCourses } from "services/courseService";
import useApi from "hooks/useApi";

export const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
  const { data, request, setData } = useApi(getCourses);

  useEffect(() => {
    request();
  }, []);

  const values = { courses: data && data.courses, setCourses: setData };

  return (
    <CoursesContext.Provider value={values}>{children}</CoursesContext.Provider>
  );
};
