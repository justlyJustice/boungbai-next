import { useFormikContext } from "formik";

// Component Imports
import FormError from "./FormError";

const Input = ({ name, className, label, labelStyle, ...otherprops }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();

  return (
    <>
      {label && (
        <label style={labelStyle} htmlFor={name}>
          {label}
        </label>
      )}

      <input
        name={name}
        /*  onBlur={() => setFieldTouched(name)} */
        onChange={({ target: { value } }) => setFieldValue(name, value)}
        value={values[name]}
        className={className}
        id={name}
        {...otherprops}
      />

      <FormError error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default Input;
