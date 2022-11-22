import React from "react";
import Footer from "../Footer.js";
import Navbar from "../Navbar";

const BaseLayout = (props) => {
  return (
    <>

      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default BaseLayout;
