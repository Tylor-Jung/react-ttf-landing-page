import React from "react";
import styles from "../components/Footer.module.css";

// Footer 컴포넌트

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>Copyright  © 30Lab, co. ALL RIGHTS RESERVED</span>
      <span className={styles.copyright}>602, Yeongdong-daero, Gangnam-gu, Seoul, Republic of Korea</span>
    <div className={styles.terms}>
    <span >Terms of Use</span>
    <span >Privacy Policy</span>
    </div>
    
    </footer>
  );
}

export default Footer;
