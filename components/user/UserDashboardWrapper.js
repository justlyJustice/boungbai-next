import UserSidebar from "./UserSideBar";

const UserDashboardWrapper = ({
  children,
  showSideBar,
  setShowSideBar,
  courses,
}) => {
  return (
    <div className="user__section">
      <UserSidebar
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        courses={courses}
      />

      <div className="user__content">{children}</div>
    </div>
  );
};

export default UserDashboardWrapper;
