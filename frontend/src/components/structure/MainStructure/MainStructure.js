import React from "react";
import styles from "./MainStructure.scss";
import classNames from "classnames/bind";
import HeaderContainer from "containers/HeaderContainer";

const cx = classNames.bind(styles);

const MainStructure = ({ children }) => (
  <div>
    <HeaderContainer />
    <main>{children}</main>
  </div>
);

export default MainStructure;
