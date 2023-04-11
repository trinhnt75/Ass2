import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "./admin/header";

const AdminLayout = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <HeaderAdmin />
      <Outlet />
      {/* Content */}
    </section>
  );
};

export default AdminLayout;
