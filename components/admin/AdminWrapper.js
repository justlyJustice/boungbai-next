import AdminSidebar from "./AdminSidebar";

const AdminWrapper = ({ children, showMenu, setShowMenu }) => {
  return (
    <section className="dashboard__section">
      <AdminSidebar showMenu={showMenu} setShowMenu={setShowMenu} />

      {children}
    </section>
  );
};

export default AdminWrapper;
