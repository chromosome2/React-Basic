import { CardDTO, Tag } from "@/pages/index/types/card";
import styles from "./DetailDialog.module.scss";

interface Props {
  data: CardDTO;
  handleDialog: (eventValue: boolean) => void;
}

function DetailDialog({ data, handleDialog }: Props) {
  const closeDialog = () => {
    handleDialog(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.container_dialog}>
        <div className={styles.container_dialog_header}>
          <div className={styles.close}>
            <button className={styles.close_button} onClick={closeDialog}>
              {/* 구글 아이콘을 사용 */}
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 28 + "px" }}
              >
                close
              </span>
            </button>
            <img
              src={data.user.profile_image.small}
              alt="사진작가 프로필 사진"
              className={styles.close_authorImage}
            />
            <span className={styles.close_authorName}>{data.user.name}</span>
          </div>
          <div className={styles.bookmark}>
            <button className={styles.bookmark_button}>
              {/* 구글 아이콘을 사용 */}
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 16 + "px" }}
              >
                favorite
              </span>
              북마크
            </button>
            <button className={styles.bookmark_button}>다운로드</button>
          </div>
        </div>
        <div className={styles.container_dialog_body}>
          <img
            src={data.urls.small}
            alt="상세이미지"
            className={styles.image}
          />
        </div>
        <div className={styles.container_dialog_footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>이미지 크기</span>
              <span className={styles.infoBox_item_value}>
                {data.width} X {data.height}
              </span>
            </div>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>업로드</span>
              <span className={styles.infoBox_item_value}>
                {data.created_at.split("T")[0]}
              </span>
            </div>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>마지막 업데이트</span>
              <span className={styles.infoBox_item_value}>
                {data.updated_at.split("T")[0]}
              </span>
            </div>
            <div className={styles.infoBox_item}>
              <span className={styles.infoBox_item_label}>다운로드</span>
              <span className={styles.infoBox_item_value}>{data.likes}</span>
            </div>
          </div>
          <div className={styles.tagBox}>
            {/* {data.tags.map((tag: Tag) => {
              return (
                <div className={styles.tagBox_tag} key={tag.title}>
                  {tag.title}
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDialog;
