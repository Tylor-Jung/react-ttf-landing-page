import React from "react";
import styles from "../components/Image_text_components.module.css";
import mobileStyles from "../components/mobile_css/Body.components.mobile.module.css";

// 이미지가 왼쪽, 텍스트가 오른쪽 위치한 컴포넌트

function ImageTextComponents({ imageSrc, altText, title, contents }) {
  return (
    <div className={`${styles.intro__container} ${mobileStyles.intro__container}`}>
      <img src={imageSrc} alt={altText} className={styles.intro__images} />
      <div className={`${styles.text__field} ${mobileStyles.text__field}`}>
        <h4 className={`${styles.intro__title} ${mobileStyles.intro__title}`}>
          {title}
        </h4>
        <span className={`${styles.intro__contents} ${mobileStyles.intro__contents}`}>
          {contents}
        </span>
      </div>
    </div>
  );
}

export default ImageTextComponents;