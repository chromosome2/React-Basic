import { CardDTO } from "@/pages/index/types/card";
import styles from "./Card.module.scss";

interface Props {
  prop_data: CardDTO;
}
function Card({ prop_data }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.card_imageBox}>
        <img
          src={prop_data.urls.small}
          alt=""
          className={styles.card_imageBox_image}
        />{" "}
      </div>
      <div className={styles.card_infoBox}>
        <div className={styles.card_infoBox_row}>
          <span className={styles.label}>작성자</span>
          <span className={styles.value}>{prop_data.user.name}</span>
        </div>
        <div className={styles.card_infoBox_row}>
          <span className={styles.label}>이미지 크기</span>
          <span className={styles.value}>
            {prop_data.width} X {prop_data.height}
          </span>
        </div>
        <div className={styles.card_infoBox_row}>
          <span className={styles.label}>업로드 날짜</span>
          <span className={styles.value}>
            {prop_data.created_at.split("T")[0]}
          </span>
        </div>
        <div className={styles.card_infoBox_row}>
          <span className={styles.label}>마지막 업데이트</span>
          <span className={styles.value}>
            {prop_data.updated_at.split("T")[0]}
          </span>
        </div>
        <div className={styles.card_infoBox_row}>
          <span className={styles.label}>다운로드 수</span>
          <span className={styles.value}>{prop_data.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
