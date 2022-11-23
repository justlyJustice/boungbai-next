export default process.env.NODE_ENV === "development"
  ? process.env.REACT_APP_TEST_PUBLIC_KEY
  : process.env.REACT_APP_LIVE_PUBLIC_KEY;
