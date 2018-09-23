import React from "react";
import styles from "./NoteWrapper.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NoteWrapper = ({ children }) => (
  <div className={cx("wrapper")}>{children}</div>
);

export default NoteWrapper;
