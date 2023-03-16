import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
// import { ToastContainer } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "72vh" }}>
        <Toaster />
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
