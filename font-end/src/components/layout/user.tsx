import { Outlet } from "react-router-dom";
import HeaderU from "./user/header";
import Footer from "./user/footer";
import Slider from "../slider";

const UserLayout = () => {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto">
        <HeaderU></HeaderU>

        {/* Content */}
        <Outlet />
        <Footer></Footer>
      </section>
    </>
  );
};

export default UserLayout;
