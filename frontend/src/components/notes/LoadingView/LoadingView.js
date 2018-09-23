import React from "react";
import styles from "./LoadingView.scss";
import classNames from "classnames/bind";
import { ChasingDots } from "better-react-spinkit";

const cx = classNames.bind(styles);

const LoadingView = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div className={cx("loading-view")}>
      <ChasingDots color={"black"} size={60} />
    </div>
  );
};

export default LoadingView;
