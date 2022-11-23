import { useFormikContext } from "formik";

const SubmitButton = ({ className, children, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <button
      type="submit"
      className={className}
      onClick={handleSubmit}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
