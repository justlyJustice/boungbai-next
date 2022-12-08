export default process.env.NODE_ENV === "development"
  ? process.env.API_DEV_URL
  : process.env.API_PROD_URL;
