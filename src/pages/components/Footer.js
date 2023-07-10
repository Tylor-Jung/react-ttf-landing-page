import styles from "../components/Footer.module.css";
import mobileStyles from "../components/mobile_css/Footer.mobile.module.css"
import privacyPolicy from "../../assets/texts/privacy_policy.txt";
import termsOfUse from "../../assets/texts/terms_of_use.txt";
import AppUnderlineTextButton from "../../components/AppUnderlineTextButton.tsx";


// Footer 컴포넌트
function Footer() {

  

  return (
    <footer className={`${styles.footer} ${mobileStyles.footer}`}>
      <span className={styles.copyright}>Copyright  © 30Lab, co. ALL RIGHTS RESERVED</span>
      <span className={styles.copyright}>602, Yeongdong-daero, Gangnam-gu, Seoul, Republic of Korea</span>
    <div className={`${styles.terms} ${mobileStyles.terms}`}>

     {/* 이용약관 하드코딩*/}
     {/* <a href={termsOfUse}>
    <span className={`${styles.text__button} ${mobileStyles.text__button}`}>Terms of Use</span>
     </a> */}

    {/* 개인정보처리방침 하드코딩*/}
    {/* <a href={privacyPolicy}>
    <span className={`${styles.text__button} ${mobileStyles.text__button}`}>Privacy Policy</span>
     </a> */}
 
 
     {/* 이용약관 컴포넌트 사용 */}
    <AppUnderlineTextButton 
    title={"Terms of Use"}
    onClick={() => {
      // window.open(termsOfUse);
      window.location.href = termsOfUse; 
    }}
    />

    {/* 개인정보처리방침 컴포넌트 사용*/}
    <AppUnderlineTextButton 
    title={"Privacy Policy"}
    onClick={() => {
      // window.open(privacyPolicy);
      window.location.href = privacyPolicy;
    }}
    />
    </div>
    
    </footer>
  );
}

export default Footer;
