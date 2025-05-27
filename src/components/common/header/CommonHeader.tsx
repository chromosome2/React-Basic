import { useNavigate } from "react-router-dom";
import styles from "./CommonHeader.module.scss";

function CommonHeader() {
  const navigate = useNavigate();
  const moveToPage = (filter: string) => {
    navigate("/" + filter);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header_logoBox} onClick={() => moveToPage("")}>
        <img
          src="src/assets/images/image-logo.png"
          alt=""
          className={styles.header_logoBox_logo}
        />
        <span className={styles.header_logoBox_title}>PhotoSplash</span>
      </div>
      <div className={styles.header_profileBox}>
        <button className={styles.header_profileBox_button}>사진제출</button>
        <button
          className={styles.header_profileBox_button}
          onClick={() => moveToPage("bookmark")}
        >
          북마크
        </button>
        <span className={styles.header_profileBox_userName}>
          JSJ | tnwls356@gmail.com
        </span>
      </div>
    </header>
  );
}

export default CommonHeader;
