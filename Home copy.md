import styles from "./Home.module.css";
import ImageTextComponents from "../components/Components.module.css";

function HomePage (){

    const title = "Unleash Your IELTS Potential with Thirtyful";
    const subTitle = "Embrace AI-Powered Realistic Testing and In-depth Learning, powered by ChatGPT";
    const displayImage = "../assets/images/displayImage.png";

  return (
    //  Header
    <div className={styles.home__background}>
      <header className={styles.home__header}>
        <span className={styles.home__ttf_text}>Thirtyful</span> for{" "}
        <span className={styles.home__header__ielts__red}>IELTS</span>
      </header>
      {/* Body */}
      {/* TTF 소개 이미지 & 텍스트(Body) */}
      <div className={styles.home__container}>
     {imageText.map((imageText)=>(
            <ImageTextComponents 
            imagePath={imageText.displayImage}
            title={title}
            subTitle={subTitle}
          />
        )
        )}
      </div>
      <p></p>{" "}
    </div>
  );
}

export default HomePage;
