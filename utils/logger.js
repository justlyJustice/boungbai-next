import LogRocket from "logrocket";

const logger = (...logData) => {
  return process.env.NODE_ENV === "production"
    ? LogRocket.log(...logData)
    : console.log(...logData);
};

export default logger;
