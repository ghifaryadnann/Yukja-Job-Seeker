import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const Layout1 = (props) => {
  let location = useLocation();

  return (
    <div>
      <Header />
      <div
        className={`${
          location.pathname !== "/job-vacancy" ? "md:px-0 px-3" : "px-0"
        }`}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
export default Layout1;
