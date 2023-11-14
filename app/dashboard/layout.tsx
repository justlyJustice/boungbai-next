import Sidebar from "@/ui/admin/Sidebar";
import { Props } from "@/types/layout";

export default function DashboardLayout({ children }: Props) {
  return (
    <section className="dashboard__section">
      {/* <AdminSidebar showMenu={showMenu} setShowMenu={setShowMenu} /> */}
      <Sidebar />

      {children}
    </section>
  );
}
