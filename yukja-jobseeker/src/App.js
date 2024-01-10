import Cookies from "js-cookie";
import { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { GlobalContext, GlobalProvider } from "./context/GlobalContext";
import Layout1 from "./layouts/layout1";
import Layout2 from "./layouts/layout2";
import Dashboard from "./pages/dashboard/dashboard";
import Detail from "./pages/detail";
import FindJob from "./pages/findJob";
import Login from "./pages/login";
import Register from "./pages/register";
import Page404 from "./pages/page404";
import ListJob from "./pages/dashboard/listJob";
import FormJob from "./pages/dashboard/formJob";
import Home from "./pages/home";
import FormPassword from "./pages/dashboard/formPassword";
import About from "./pages/about";
import Profile from "./pages/dashboard/profile";

function App() {
  const LoginRoute = (props) => {
    if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />;
    } else if (Cookies.get("token") === undefined) {
      return props.children;
    }
  };

  const HandleAuth = (props) => {
    if (Cookies.get("token") === undefined) {
      return <Navigate to={"/login"} />;
    } else {
      return props.children;
    }
  };

  return (
    <div>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Layout1>
                  <Home />
                </Layout1>
              }
            />
            <Route
              path="/about"
              element={
                <Layout1>
                  <About />
                </Layout1>
              }
            />
            <Route
              path="/job-vacancy"
              element={
                <Layout1>
                  <FindJob />
                </Layout1>
              }
            />
            <Route
              path="/job-vacancy/:ID_GAMES"
              element={
                <Layout1>
                  <Detail />
                </Layout1>
              }
            />
            <Route
              path="/sign-up"
              element={
                <LoginRoute>
                  <Layout1>
                    <Register />
                  </Layout1>
                </LoginRoute>
              }
            />
            <Route
              path="/login"
              element={
                <LoginRoute>
                  <Layout1>
                    <Login />
                  </Layout1>
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <HandleAuth>
                  <Layout2>
                    <Dashboard />
                  </Layout2>
                </HandleAuth>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy"
              element={
                <HandleAuth>
                  <Layout2>
                    <ListJob />
                  </Layout2>
                </HandleAuth>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/create"
              element={
                <HandleAuth>
                  <Layout2>
                    <FormJob />
                  </Layout2>
                </HandleAuth>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/edit/:ID_GAMES"
              element={
                <HandleAuth>
                  <Layout2>
                    <FormJob />
                  </Layout2>
                </HandleAuth>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/form"
              element={
                <HandleAuth>
                  <Layout2>
                    <FormJob />
                  </Layout2>
                </HandleAuth>
              }
            />
            <Route
              path="/dashboard/change-password"
              element={
                <HandleAuth>
                  <Layout2>
                    <FormPassword />
                  </Layout2>
                </HandleAuth>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <HandleAuth>
                  <Layout2>
                    <Profile />
                  </Layout2>
                </HandleAuth>
              }
            />
            <Route
              path="*"
              element={
                <Layout1>
                  <Page404 />
                </Layout1>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
