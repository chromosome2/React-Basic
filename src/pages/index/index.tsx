//rfce 기본세팅 단축어.
import { useMemo, useState, Suspense, lazy } from "react";
import styles from "./styles/index.module.scss";

import CommonHeader from "@components/common/header/CommonHeader";
import CommonNav from "@components/common/navigation/CommonNav";
import CommonSearchBar from "@components/common/searchBar/CommonSearchBar";
import CommonFooter from "@components/common/footer/CommonFooter";
import Card from "./components/Card";
import DetailDialog from "@/components/common/dialog/DetailDialog.tsx";
import Loading from "@/pages/index/components/Loading";
// import api_key from "./apiKey.tsx";s
import { CardDTO } from "./types/card.ts";
const CardList = lazy(() => import("./CardList.tsx"));

function index() {
  const [imgData, setImgData] = useState<CardDTO>();
  const [open, setOpen] = useState<boolean>(false); //이미지 상세 다이얼로그 발생(관리) State

  return (
    <div className={styles.page}>
      {/*공통 헤더 UI 부분*/}
      <CommonHeader />
      {/* 공통 네비게이션 UI 부분 */}
      <CommonNav />
      <div className={styles.page_contents}>
        <div className={styles.page_contents_introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper_title}>PhtoSplash</span>
            <span className={styles.wrapper_desc}>
              인터넷의 시각 자료 출처입니다. <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </span>
            {/* 검색창 UI 부분 */}
            <CommonSearchBar />
          </div>
        </div>
        <div className={styles.page_contents_imageBox}>
          <Suspense fallback={<Loading />}>
            <CardList
              open={open}
              setOpen={setOpen}
              imgData={imgData}
              setImgData={setImgData}
            />
          </Suspense>
          {/* index.tsx.(부모)파일안에 Card가 import(자식)되어 있는 상태. => 이런 상황일때 props이라는 개념 사용 가능. 부모(상위 컴포넌트)에서 자식(하위컴포넌트)한테 데이터 전달하는 것임. */}
        </div>
      </div>
      {/* 공통 푸터 UI 부분 */}
      <CommonFooter />
      {open && <DetailDialog data={imgData} handleDialog={setOpen} />}
    </div>
  );
}

export default index;
