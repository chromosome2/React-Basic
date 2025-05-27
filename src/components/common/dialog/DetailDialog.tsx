import { CardDTO, Tag } from "@/pages/index/types/card";
import styles from "./DetailDialog.module.scss";
import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";
// import toast, { toastConfig } from "react-simple-toasts";
// import "react-simple-toasts/dist/theme/dark.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toastConfig({
//   theme: "dark",
//   position: "top-center", // 또는 "bottom-center"
// });

interface Props {
  data: CardDTO;
  handleDialog: (eventValue: boolean) => void;
}

function DetailDialog({ data, handleDialog }: Props) {
  const [bookmark, setBookmark] = useState(false);
  //다이얼로그 끄기
  const closeDialog = () => {
    handleDialog(false);
  };

  //bookmark 추가 이벤트
  const addBookmark = (selected: CardDTO) => {
    setBookmark(true);

    const getLocalStorage = JSON.parse(localStorage.getItem("bookmark"));

    if (!getLocalStorage || getLocalStorage == null) {
      //1.로컬스토리지에 bookmark라는 데이터가 없을 경우
      localStorage.setItem("bookmark", JSON.stringify([selected]));
      toast("🌟 북마크 저장 완료");
    } else {
      //2.해당 이미지가 이미 로컬스토리지 bookmark라는 데이터에 저장되어 있을 경우
      if (
        getLocalStorage.findIndex((item: CardDTO) => item.id == selected.id) >
        -1
      ) {
        toast("📌 이미 북마크에 저장되어 있습니다.");
      } else {
        //3. 해당 이미지가 로컬스토리지 bookmark라는 데이터에 저장되어 있지 않을 경우 + bookmark라는 데이터에 이미 어떤 값이 담겨 있는 경우우
        const res = [...getLocalStorage];
        res.push(selected);
        localStorage.setItem("bookmark", JSON.stringify(res));
        toast("🌟 북마크 저장 완료");
      }
    }
  };

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem("bookmark"));

    if (
      getLocalStorage &&
      getLocalStorage.findIndex((item: CardDTO) => item.id == data.id) > -1
    ) {
      setBookmark(true);
    } else if (!getLocalStorage) return;

    //esc키 눌렀을 때, 다이얼로그 창 닫기
    const escKeyDownCloseDialog = (event: any) => {
      console.log("함수 호출");
      if (event.key == "Escape") {
        closeDialog();
      }
    };
    //위에 만들어 놓은 escKeyDownCloseDialog 를 키다운 했을 때, 이벤트로 등록 및 해지
    window.addEventListener("keydown", escKeyDownCloseDialog);
    return () => window.removeEventListener("keydown", escKeyDownCloseDialog);
  }, []);
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
            <button
              className={styles.bookmark_button}
              onClick={() => addBookmark(data)}
            >
              {/* 구글 아이콘을 사용 */}
              {bookmark == false ? (
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 16 + "px" }}
                >
                  favorite
                </span>
              ) : (
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 16 + "px", color: "red" }}
                >
                  favorite
                </span>
              )}
              북마크
            </button>
            <ToastContainer
              position="bottom-center" // 알람 위치 지정
              autoClose={3000} // 자동 off 시간
              hideProgressBar={true} // 진행시간바 숨김
              closeOnClick // 클릭으로 알람 닫기
              rtl={false} // 알림 좌우 반전
              pauseOnFocusLoss // 화면을 벗어나면 알람 정지
              draggable // 드래그 가능
              pauseOnHover // 마우스를 올리면 알람 정지
              theme="dark"
              closeButton={false}
            />
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
