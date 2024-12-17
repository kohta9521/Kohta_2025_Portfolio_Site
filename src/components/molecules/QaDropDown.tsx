"use client";
import React, { useState } from "react";

// next

// react icons
import { FaQuestion } from "react-icons/fa";
import { RiQuestionAnswerLine } from "react-icons/ri";

// scss
import styles from "./styles/QaDropDown.module.scss";

// props
export type QaDropDownProps = {
  id: string;
  question: string;
  answer: string;
};

const QaDropDown = ({ id, question, answer }: QaDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.boxArea} key={id}>
      <div className={styles.questionBox} onClick={toggleDropdown}>
        <FaQuestion className={styles.icon} />
        <span className={styles.questionText}>{question}</span>
      </div>
      {isOpen && (
        <div className={styles.answerBox}>
          <RiQuestionAnswerLine className={styles.icon} />
          <p className={styles.answerText}>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QaDropDown;
