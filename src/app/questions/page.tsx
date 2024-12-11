import React from "react";

// scss
import styles from "./Questions.module.scss";

// components
import SubPageTemp from "@/components/template/SubPageTemp";

const Questions = () => {
  return (
    <SubPageTemp
      id="questions"
      enTitle="QUESTIONS"
      jaTitle="よくある質問"
      desc="よくある質問をまとめました。"
    >
      <p className={styles.main}>こちらに、、、</p>
    </SubPageTemp>
  );
};

export default Questions;
