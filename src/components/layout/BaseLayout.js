import React from "react";
import Footer from "../Footer.js";
import Navbar from "../Navbar";

const BaseLayout = (props) => {
  return (
    <>

      <Navbar />
      <Footer />

      {props.children}
    </>
  );
};

export default BaseLayout;
