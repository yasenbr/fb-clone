import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
      </div>
      <div className="headre__middle"></div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
