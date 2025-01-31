import React from "react";
import Contact from "../pages/Contact";
import { Outlet } from "react-router";
const ContactLayout = () => {
  return (
    <div>
      <Contact />
      <Outlet />
    </div>
  );
};

export default ContactLayout;
