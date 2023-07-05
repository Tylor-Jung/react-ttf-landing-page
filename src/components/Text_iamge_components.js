import React from "react";
import styles from "../components/Image_text_components.module.css";
import displayImage from "../assets/images/display.png";

// 텍스트가 오른쪽, 이미지가 왼쪽 위치한 컴포넌트

function TextIamgeComponents() {
  return (
    <div className={styles.intro__container}>
      <div>
        <h4 className={styles.intro__title}>
        You can take a test almost the same as the IELTS Speaking test.
        </h4>
        <span className={styles.intro__contents}>
        Are you planning to take the IELTS test soon? 
        Now, you can take practice tests right from your mobile phone 
        and receive instant scores!
        </span>
      </div>
      <img src={displayImage} alt="Display" className={styles.intro__images} />
    </div>
  );
}

export default TextIamgeComponents;