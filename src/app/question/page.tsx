import React from "react";

// scss
import styles from "./Questions.module.scss";

// data
import { questionsItems } from "@/data/qustions";

// components
import SubPageTemp from "@/components/template/SubPageTemp";
import SubTitle from "@/components/atoms/SubTitle";
import SubText from "@/components/atoms/SubText";
import QaDropDown from "@/components/molecules/QaDropDown";

const Questions = () => {
  return (
    <SubPageTemp
      id="questions"
      enTitle="QUESTIONS"
      jaTitle="よくある質問"
      desc="よくある質問をまとめました。"
    >
      <SubTitle id="#questions" size="h1" text="よくある質問" />
      <SubText
        id="#questions"
        text="お仕事や私に関するよくお問い合わせいただく質問をまとめました。"
      />
      <div className={styles.dropBox}>
        {questionsItems.map((item) => (
          <QaDropDown
            key={item.id}
            id={item.id}
            question={item.qText}
            answer={item.aText}
          />
        ))}
      </div>
    </SubPageTemp>
  );
};

export default Questions;
