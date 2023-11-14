import { Formik, FormikHandlers, FormikValues } from "formik";
import { SchemaObjectDescription, ValidateOptions } from "yup";

type Props = {
  children: React.ReactNode;
  initialValues: FormikValues;
  onSubmit: (values: FormikValues) => void;
  validationSchema: SchemaObjectDescription;
};

const AppForm = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: Props) => {
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
