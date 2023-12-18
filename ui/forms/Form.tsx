import { Formik, FormikHandlers, FormikValues } from "formik";
import { SchemaObjectDescription, ValidateOptions } from "yup";

const AppForm = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: any) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
