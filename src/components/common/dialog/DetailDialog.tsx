import styles from "./DetailDialog.module.scss";

function DetailDialog() {
  return (
    <div className={styles.container}>
      <div className={styles.container_dialog}>
        <div className={styles.container_dialog_header}>
          <div className={styles.close}>
            <button className={styles.close_button}>
              {/* 구글 아이콘을 사용 */}
            </button>
            <img
              src=""
              alt="사진작가 프로필 사진"
              className={styles.close_authorImage}
            />
            <span className={styles.close_authorName}>조수진</span>
          </div>
          <div className={styles.bookmark}>
            <button className={styles.bookmark_button}>
              {/* 구글 아이콘 사용 */}북마크
            </button>
            <button className={styles.bookmark_button}>다운로드</button>
          </div>
        </div>
        <div className={styles.container_dialog_body}>
          <img src="" alt="상세이미지" className={styles.image} />
        </div>
        <div className={styles.container_dialog_footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>이미지 크기</span>
              <span className={styles.infoBox_item_value}>
                상세 데이터 조회
              </span>
            </div>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>이미지 크기</span>
              <span className={styles.infoBox_item_value}>
                상세 데이터 조회
              </span>
            </div>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>이미지 크기</span>
              <span className={styles.infoBox_item_value}>
                상세 데이터 조회
              </span>
            </div>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>이미지 크기</span>
              <span className={styles.infoBox_item_value}>
                상세 데이터 조회
              </span>
            </div>
          </div>
          <div className={styles.tagBox}>
            <div className={styles.tagBox_tag}>태그 데이터</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDialog;
