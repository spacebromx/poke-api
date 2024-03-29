import React from "react";
import logo from "../img/logo.png";

const Header = () => (
  <div className="d-flex flex-column flex-md-row align-items-center justify-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h5 className="my-0 mr-md-auto font-weight-normal">
      <img src={logo} height="40" />
    </h5>
  </div>
);

export default Header;
