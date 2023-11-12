type Props = {
  error: string;
  visible: boolean;
};

const FormError = ({ error, visible }: Props) => {
  if (!error || !visible) return null;

  return <small className="error">{error}</small>;
};

export default FormError;
