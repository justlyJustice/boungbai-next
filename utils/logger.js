import LogRocket from "logrocket";

export const logger = (...logData) => {
  return process.env.NODE_ENV === "production"
    ? LogRocket.log(...logData)
    : console.log(...logData);
};
