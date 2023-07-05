import React from "react";
import styles from "../components/Image_text_components.module.css";
import displayImage from "../assets/images/display.png";

// 이미지가 왼쪽, 텍스트가 오른쪽 위치한 컴포넌트

function ImageTextComponents() {
  return (
    <div className={styles.intro__container}>
      <img src={displayImage} alt="Display" className={styles.intro__images} />
      <div>
        <h4 className={styles.intro__title}>
          Unleash Your IELTS Potential with Thirtyful
        </h4>
        <span className={styles.intro__contents}>
          Embrace AI-Powered Realistic Testing and In-depth Learning, powered by ChatGPT
        </span>
      </div>
    </div>
  );
}

export default ImageTextComponents;