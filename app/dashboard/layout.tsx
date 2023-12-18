import SideNav from "@/ui/admin/SideNav";
import { Props } from "@/types/layout";

function Layout({ children }: Props) {
  return (
    <section className="dashboard__section">
      {/* <AdminSidebar showMenu={showMenu} setShowMenu={setShowMenu} /> */}
      <SideNav />

      {children}
    </section>
  );
}

export default Layout;
