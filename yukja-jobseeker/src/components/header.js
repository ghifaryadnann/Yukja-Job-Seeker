import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { GlobalContext } from "../context/GlobalContext";

const Header = () => {
  const { state } = useContext(GlobalContext);
  const { navigate, user, setUser } = state;
  const [userDropdown, setUserDropdown] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  let location = useLocation();

  return (
    <header className="bg-transparent py-3 lg:py-1 px-3 md:px-0 absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center relative justify-between">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Link to="/">
                <img src={Logo} alt="logo" className="max-w-[7rem] pb-3 " />
              </Link>
              <div className="flex items-center px-4 ">
                <button
                  type="button"
                  id="hamburger"
                  onClick={() => setHamburger(!hamburger)}
                  className={`hamburger ${
                    hamburger ? "hamburger-active" : ""
                  } block absolute right-4 lg:hidden`}
                >
                  <span className="hamburger-line origin-top-left transition duration-150 ease-in-out"></span>
                  <span className="hamburger-line transition duration-150 ease-in-out"></span>
                  <span className="hamburger-line origin-bottom-left transition duration-150 ease-in-out"></span>
                </button>

                <nav
                  id="nav-menu"
                  className={`nav-menu ${
                    hamburger ? "" : "hidden"
                  } lg:block lg:static lg:bg-transparent lg:max-w-full absolute py-5 lg:shadow-none lg:rounded-none bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full`}
                >
                  <ul className="block lg:flex items-center">
                    <li className="group">
                      <Link to="/job-vacancy">
                        <span
                          className={`${
                            location.pathname === "/job-vacancy"
                              ? "nav-item-active"
                              : "nav-item group-hover:text-primary"
                          }`}
                        >
                          Cari Pekerjaan
                        </span>
                      </Link>
                    </li>
                    <li className="group">
                      <Link to="/about">
                        <span
                          className={`${
                            location.pathname === "/about"
                              ? "nav-item-active"
                              : "nav-item group-hover:text-primary"
                          }`}
                        >
                          Tentang Kami
                        </span>
                      </Link>
                    </li>
                    {!Cookies.get("token") && (
                      <>
                        <li className="group block lg:hidden">
                          <Link to="/login">
                            <span
                              className={`${
                                location.pathname === "/login"
                                  ? "nav-item-active"
                                  : "nav-item group-hover:text-primary"
                              }`}
                            >
                              Log In
                            </span>
                          </Link>
                        </li>
                        <li className="group block lg:hidden">
                          <Link to="/sign-up">
                            <span
                              className={`${
                                location.pathname === "/sign-up"
                                  ? "nav-item-active"
                                  : "nav-item group-hover:text-primary"
                              }`}
                            >
                              Sign Up
                            </span>
                          </Link>
                        </li>
                      </>
                    )}
                    {Cookies.get("token") && (
                      <>
                        <li className="mt-3 px-3">
                          <button
                            type="button"
                            onClick={() => setUserDropdown(!userDropdown)}
                            className="flex flex-nowrap items-center gap-3 lg:hidden relative"
                          >
                            <img
                              src={user.image_url ?? "Default"}
                              className="w-6 h-6 rounded-full object-center object-fill"
                            />
                            <p className="text-sm font-semibold">
                              {user.name ?? "Default"}
                            </p>
                            <div
                              className={`z-10 ${
                                userDropdown ? "absolute" : "hidden"
                              }  top-12 right-0 bg-white divide-y divide-gray-100 rounded shadow w-44`}
                            >
                              <ul
                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                              >
                                <li>
                                  <Link to="/dashboard">
                                    <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-white">
                                      Dashboard
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/dashboard/change-password">
                                    <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-white">
                                      Ganti Password
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/dashboard/profile">
                                    <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-white">
                                      Profile
                                    </span>
                                  </Link>
                                </li>
                                {Cookies.get("token") && (
                                  <li
                                    onClick={() => {
                                      Cookies.remove("token");
                                      Cookies.remove("user_data");
                                      navigate("/login");
                                    }}
                                  >
                                    <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-white">
                                      Logout
                                    </span>
                                  </li>
                                )}
                              </ul>
                            </div>
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
            {!Cookies.get("token") && (
              <div className="lg:flex flex-nowrap gap-7 hidden">
                <button className="text-dark hover:text-primary transition">
                  <Link to="/login">Log In</Link>
                </button>
                <button className="px-6 py-2 text-white bg-primary rounded-full">
                  <Link to="/sign-up">Sign Up</Link>
                </button>
              </div>
            )}
            {Cookies.get("token") && (
              <button
                type="button"
                onClick={() => setUserDropdown(!userDropdown)}
                className="lg:flex flex-nowrap items-center gap-3 hidden relative"
              >
                <img
                  src={user.image_url ?? "Default"}
                  className="w-10 h-10 rounded-full object-center object-fill"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold">
                    {user.name ?? "Default"}
                  </p>
                  <p className="text-xs font-light">
                    {user.email ?? "Default"}
                  </p>
                </div>
                <div
                  className={`z-10 ${
                    userDropdown ? "absolute" : "hidden"
                  }  top-12 right-0 bg-white divide-y divide-gray-100 rounded shadow w-44`}
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link to="/dashboard">
                        <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-white">
                          Dashboard
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/change-password">
                        <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-white">
                          Ganti Password
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/profile">
                        <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-white">
                          Profile
                        </span>
                      </Link>
                    </li>
                    {Cookies.get("token") && (
                      <li
                        onClick={() => {
                          Cookies.remove("token");
                          Cookies.remove("token");
                          Cookies.remove("user_data");

                          navigate("/login");
                        }}
                      >
                        <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:text-white">
                          Logout
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
