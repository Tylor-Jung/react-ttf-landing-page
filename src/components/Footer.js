import React from "react";
import styles from "../components/Footer.module.css";
import privacyPolicy from "../assets/texts/privacy_policy.txt";
import termsOfUse from "../assets/texts/terms_of_use.txt";

// Footer 컴포넌트

function Footer() {

  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>Copyright  © 30Lab, co. ALL RIGHTS RESERVED</span>
      <span className={styles.copyright}>602, Yeongdong-daero, Gangnam-gu, Seoul, Republic of Korea</span>
    <div className={styles.terms}>

     {/* 이용약관  */}
     <a href={termsOfUse}>
    <span className={styles.text__button}>Terms of Use</span>
     </a>

    {/* 개인정보처리방침 */}
    <a href={privacyPolicy}>
    <span className={styles.text__button}>Privacy Policy</span>

    </a>
    </div>
    
    </footer>
  );
}

export default Footer;
