import React from "react";
import styles from "./Home.module.css";
import ImageTextComponents from "../components/Image_text_components";
import TextImageComponents from "../components/Text_iamge_components";
import DownloadComponents from "../components/Download_components";
import Footer from "../components/Footer";

function HomePage (){
  return (
    //  Header
    <div className={styles.home__background}>
      <header className={styles.home__header}>
        <span className={styles.home__ttf_text}>Thirtyful</span> for 
        <span className={styles.home__header__ielts__red}>IELTS</span>
      </header>
      {/* Body */}
      {/* ImageTextComponents = 이미지가 왼쪽, 텍스트가 오른쪽 */}
        <ImageTextComponents />
      {/* TextImageComponents = 이미지가 왼쪽, 텍스트가 오른쪽 */}
        <TextImageComponents />
        <ImageTextComponents />
        <TextImageComponents />
        <ImageTextComponents />
        <TextImageComponents />
        <DownloadComponents />
        <Footer />
 
    </div>
  );
}

export default HomePage;
