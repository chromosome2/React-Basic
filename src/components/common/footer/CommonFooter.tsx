import styles from "./CommonFooter.module.scss";

function CommonFooter() {
  return (
    // 시맨틱태그를 해주면 이 부분이 어떤 역할인지 한눈에 볼수있어서 가독성이 좋음
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button className={styles.pagination_button}>
          <img src="src/assets/icons/icon-arrowLeft.svg" alt="" />
        </button>
        {/* 변경될 UI 부분 */}
        <span>1</span>
        <button className={styles.pagination_button}>
          <img src="src/assets/icons/icon-arrowRight.svg" alt="" />
        </button>
      </div>
    </footer>
  );
}

export default CommonFooter;
