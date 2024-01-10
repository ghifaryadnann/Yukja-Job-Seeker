import Footer from "../components/footer";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useContext, useState } from "react";
import {
  BsCompassFill,
  BsFillDoorOpenFill,
  BsFillFileEarmarkFill,
  BsFillKeyFill,
  BsInputCursor,
  BsPersonFill,
} from "react-icons/bs";
import { GlobalContext } from "../context/GlobalContext";
import Cookies from "js-cookie";

const Layout2 = (props) => {
  const { state } = useContext(GlobalContext);
  const { hamburger, setHamburger, user, setUser, navigate } = state;
  let location = useLocation();
  return (
    <div className="bg-gray-100">
      <main
        className={`relative overflow-x-hidden h-screen bg-gray-100 rounded-2xl`}
      >
        <div className="flex items-start justify-between relative">
          <div
            className={`${
              hamburger ? "absolute w-[70%] z-50" : "hidden w-56"
            } h-screen my-4 ml-4 shadow-lg md:fixed md:block`}
          >
            <div className="h-full bg-white rounded-2xl">
              <div className="flex items-center justify-center pt-6">
                <button
                  type="button"
                  id="hamburger"
                  onClick={() => setHamburger(!hamburger)}
                  className={`hamburger ${
                    hamburger ? "hamburger-active" : ""
                  } block absolute left-4 md:hidden`}
                >
                  <span className="hamburger-line origin-top-left transition duration-150 ease-in-out"></span>
                  <span className="hamburger-line transition duration-150 ease-in-out"></span>
                  <span className="hamburger-line origin-bottom-left transition duration-150 ease-in-out"></span>
                </button>
                <Link to="/">
                  <img src={Logo} className="max-w-[8rem]" />
                </Link>
              </div>
              <nav className="mt-6">
                <div>
                  <hr />
                  <Link to="/dashboard/profile">
                    <span className="text-center flex gap-2 items-center justify-center -translate-x-7 py-5">
                      <img
                        alt="profil"
                        src={user.image_url}
                        className="object-cover rounded-full h-8 w-8"
                      />
                      <span className="">{user.name}</span>
                    </span>
                  </Link>
                  <hr />
                  <Link
                    to="/dashboard"
                    className={`${
                      location.pathname === "/dashboard"
                        ? "dashboard-nav-item-active"
                        : "dashboard-nav-item"
                    }`}
                  >
                    <span className="text-left">
                      <BsCompassFill />
                    </span>
                    <span className="mx-4 text-sm font-normal">Dashboard</span>
                  </Link>
                  <Link
                    to="/dashboard/list-job-vacancy"
                    className={`${
                      location.pathname === "/dashboard/list-job-vacancy" ||
                      location.pathname ===
                        "/dashboard/list-job-vacancy/create" ||
                      location.pathname ===
                        "/dashboard/list-job-vacancy/edit/:ID_GAMES"
                        ? "dashboard-nav-item-active"
                        : "dashboard-nav-item"
                    }`}
                  >
                    <span className="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="m-auto"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">Jobs</span>
                  </Link>
                  <Link
                    to="/dashboard/list-job-vacancy/form"
                    className={`${
                      location.pathname === "/dashboard/list-job-vacancy/form"
                        ? "dashboard-nav-item-active"
                        : "dashboard-nav-item"
                    }`}
                  >
                    <span className="text-left">
                      <BsFillFileEarmarkFill />
                    </span>
                    <span className="mx-4 text-sm font-normal">Data Form</span>
                  </Link>
                  <Link
                    to="/dashboard/change-password"
                    className={`${
                      location.pathname === "/dashboard/change-password"
                        ? "dashboard-nav-item-active"
                        : "dashboard-nav-item"
                    }`}
                  >
                    <span className="text-left">
                      <BsFillKeyFill />
                    </span>
                    <span className="mx-4 text-sm font-normal">Password</span>
                  </Link>
                  <hr />
                  <Link
                    to="/dashboard/profile"
                    className={`${
                      location.pathname === "/dashboard/profile"
                        ? "dashboard-nav-item-active"
                        : "dashboard-nav-item"
                    }`}
                  >
                    <span className="text-left">
                      <BsPersonFill />
                    </span>
                    <span className="mx-4 text-sm font-normal">Profile</span>
                  </Link>
                  <div
                    onClick={() => {
                      Cookies.remove("token");
                      Cookies.remove("user_data");
                      navigate("/login");
                    }}
                    className="dashboard-nav-item cursor-pointer"
                  >
                    <span className="text-left">
                      <BsFillDoorOpenFill />
                    </span>
                    <span className="mx-4 text-sm font-normal">Log Out</span>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="flex flex-col w-full md:ml-56 p-4 space-y-4 h-full">
            <div className="z-40 items-center w-full h-16 rounded-2xl px-5">
              <div className="container relative left-0 z-50 flex items-center justify-between w-full h-full">
                <button
                  type="button"
                  id="hamburger"
                  onClick={() => setHamburger(!hamburger)}
                  className={`hamburger ${
                    hamburger ? "hamburger-active" : ""
                  } block absolute left-0 md:hidden`}
                >
                  <span className="hamburger-line origin-top-left transition duration-150 ease-in-out"></span>
                  <span className="hamburger-line transition duration-150 ease-in-out"></span>
                  <span className="hamburger-line origin-bottom-left transition duration-150 ease-in-out"></span>
                </button>
              </div>
              {props.children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Layout2;
