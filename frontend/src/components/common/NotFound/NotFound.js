import React from "react";
import styles from "./NotFound.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NotFound = ({ onGoBack }) => (
  <div className={cx("not-found")}>
    <div className={cx("description")}>
      Hmm...
      <br /> You've reached some weird page!
      <div className={cx("go-back")} onClick={onGoBack}>
        Go Back
      </div>
    </div>
  </div>
);

export default NotFound;
