import Link from "next/link";

export const AuthDropdown = ({ user }) => {
  const handleLogout = () => {
    authService.logout();
  };

  return (
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        href="#"
      >
        {user ? user.name : "Login"}
      </Link>

      <div
        className="dropdown-menu"
        aria-labelledby="navbarDropdownMenuLink"
        id="navbarDropdDownMenuLink"
      >
        {user && (
          <Link className="dropdown-item" href="/dashboard">
            <span>
              <i className="fa-solid fa-user text-muted"></i> User Dashboard
            </span>
          </Link>
        )}

        {user ? (
          <Link className="dropdown-item" href="" onClick={handleLogout}>
            <span>
              <i className="fa-solid fa-right-from-bracket text-muted"></i>{" "}
              Logout: <b className="text-dark">{user.name}</b>
            </span>
          </Link>
        ) : (
          <Link className="dropdown-item" href="/auth/user">
            User Login
          </Link>
        )}
      </div>
    </li>
  );
};
