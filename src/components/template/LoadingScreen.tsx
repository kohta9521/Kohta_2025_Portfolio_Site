import React from "react";

// scss
import styles from "./styles/LoadingScreen.module.scss";

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
