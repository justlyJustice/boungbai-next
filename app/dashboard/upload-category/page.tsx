// import useSubmit from "hooks/useSubmit";
// import { toast } from "react-toastify";
// import { uploadCategory } from "services/categoryService";

import UploadCategoryForm from "@/ui/admin/UploadCategoryForm";

const UploadCategory = () => {
  return (
    <>
      <div className="side__content">
        <div className="side__text__contain">
          <h2>Welcome, Admin</h2>
          <p>Manage existing, and upload new categories</p>
        </div>

        <div className="form__contain">
          <UploadCategoryForm />
        </div>
      </div>
    </>
  );
};

export default UploadCategory;
