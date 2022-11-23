const FormError = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <small className="error">{error}</small>;
};

export default FormError;
