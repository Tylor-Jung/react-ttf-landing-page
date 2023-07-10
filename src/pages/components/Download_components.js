import React from "react";
import styles from "../../pages/components/Download_components.module.css";
import mobileStyles from "../../pages/components/mobile_css/Download_components.mobile.module.css";
import appstore from "../../../src/assets/images/app_store_button.png";
import googleplay from "../../../src/assets/images/google_play_store_button.png";


// 다운로드 이미지 & 링크가 있는 컴포넌트

function DownloadComponents() {
  return (
    <div className={`${styles.download__container} ${mobileStyles.download__container}`}>
      <div>
        <h1 className={`${styles.download__title} ${mobileStyles.download__title}`}>The easiest way to make your IELTS scores higher </h1>
        <h2 className={`${styles.download__contents} ${mobileStyles.download__contents}`}>
          Thirtyful for IELTS is now available on App Store and Google Play
        </h2>

        <div className={`${styles.download__images} ${mobileStyles.download__images}`}>
          <a href="https://apps.apple.com/us/app/thirtyful-for-ielts/id6448330332">
            <img src={appstore} alt="App Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.thirtylab.thirtyful">
            <img src={googleplay} alt="Google Play Store" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DownloadComponents;
