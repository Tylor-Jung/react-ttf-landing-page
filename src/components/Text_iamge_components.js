import React from "react";
import styles from "../components/Image_text_components.module.css";

// 텍스트가 오른쪽, 이미지가 왼쪽 위치한 컴포넌트

function TextIamgeComponents({ imageSrc, altText, title, contents }) {

  return (
    <div className={styles.intro__container}>
      <div className={styles.text__field}>
        <h4 className={styles.intro__title}>
        {title}
        </h4>
        <span className={styles.intro__contents}>
        {contents}
        </span>
      </div>
      <img src={imageSrc} alt={altText} className={styles.intro__images} />
    </div>
  );
}

export default TextIamgeComponents;