export default process.env.NODE_ENV === "development"
  ? `http://localhost:4000`
  : `http://www.boungbai.com`;
