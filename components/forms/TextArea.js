import { useFormikContext } from "formik";

import FormError from "./FormError";

const TextArea = ({ name, ...otherProps }) => {
  const { touched, errors, setFieldTouched, values, setFieldValue } =
    useFormikContext();

  return (
    <>
      <textarea
        name={name}
        onBlur={() => setFieldTouched(name)}
        onChange={({ target: { value } }) => setFieldValue(name, value)}
        value={values[name]}
        id={name}
        {...otherProps}
      ></textarea>

      <FormError error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default TextArea;
