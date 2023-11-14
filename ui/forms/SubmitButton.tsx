import { useFormikContext } from "formik";

type Props = {
  className: string;
  children: React.ReactNode;
  otherProps?: string;
};

const SubmitButton = ({ className, children, ...otherProps }: Props) => {
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
