export default process.env.NODE_ENV === "development"
  ? `http://localhost:3000`
  : `http://www.boungbai.com`;
