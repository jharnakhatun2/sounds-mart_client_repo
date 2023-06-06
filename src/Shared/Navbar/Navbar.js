import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log);
  };

  const menuItems = (
    <>
      <NavLink className="nav-content" to="/">
        <span>Home</span>
      </NavLink>

      <NavLink className="nav-content" to="/blogs">
        <span>Blogs</span>
      </NavLink>
      {user?.uid ? (
        <>
          <NavLink className="nav-content" to="/dashboard">
            <span>Dashboard</span>
          </NavLink>
          <NavLink onClick={handleLogout} className="nav-content">
            <span>Log Out</span>
          </NavLink>
        </>
      ) : (
        <NavLink to="/login" className="nav-content">
          <span>Log In</span>
        </NavLink>
      )}
      <NavLink className="nav-content" to="/signup">
        <span>Signup</span>
      </NavLink>
    </>
  );

  // Navbar style functions
  const header = document.querySelector(".page-header");
  const toggleClass = "is-sticky";

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
      header.classList.add(toggleClass);
    } else {
      header.classList.remove(toggleClass);
    }
  });

  return (
    <header className=" page-header z-30">
      <div className="px-5">
        <nav className="flex">
          {/* ============Dropdown Menu for small device============== */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="lg:hidden">
              <AiOutlineMenu className="text-white bg-[#18465c] text-2xl p-1 rounded" />
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-3 shadow bg-[#18465c] rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>

          {/* ===============Sound mart Logo===================== */}
          <Link to="/">
            <img
              className="w-[50%] mx-auto"
              src="https://i.ibb.co/C8xHbgn/logosm.png"
              alt="sound's mart logo"
            />
          </Link>

          {/* =============Large device menu================= */}
          <div className="style-1 navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 ">{menuItems}</ul>
          </div>

          {/* ===================Dashboard================ */}
          <div className="flex ">
            <div className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-bag text-black hover:text-primary  p-2 shadow hover:cursor-pointer"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />{" "}
              </svg>
            </div>

            <div className="mx-1">
              <Link to="/wishlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-heart text-black hover:text-primary p-2 shadow hover:cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />{" "}
                </svg>
              </Link>
            </div>

            <div className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-person text-black  hover:text-primary p-1 shadow hover:cursor-pointer"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />{" "}
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
