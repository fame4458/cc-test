import React from "react";
import Navbar from "./Core/Navbar";
import { Helmet } from "react-helmet";
import Footer from "./Core/Footer";

export default function MainLayout(props) {
  const { component: Child } = props;

  return (
    <div className="d-flex flex-column mh-100">
      <Helmet>
        <title>Test</title>
      </Helmet>

      <Navbar />
      <div className="d-flex flex-1 overflow-auto">
        <div className="d-flex">
          <Child {...props} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
