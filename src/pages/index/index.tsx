//rfce 기본세팅 단축어.
import { useState } from "react";
import { useAtom } from "jotai";
import { imageData } from "@/recoil/selectors/imageSelectors.ts";
import styles from "./styles/index.module.scss";

import CommonHeader from "@components/common/header/CommonHeader";
import CommonNav from "@components/common/navigation/CommonNav";
import CommonSearchBar from "@components/common/searchBar/CommonSearchBar";
import CommonFooter from "@components/common/footer/CommonFooter";
import Card from "./components/Card";
// import api_key from "./apiKey.tsx";s
import { CardDTO } from "./types/card.ts";

function index() {
  const [imgSelector] = useAtom(imageData);

  const [imgData, setImgData] = useState<CardDTO[]>([]);

  const CARD_LIST = imgSelector.results.map((card: CardDTO) => {
    return <Card data={card} key={card.id} />; //data에 card 데이터를 props를 시킨다. props시키는 부분임
  });

  // useEffect(() => {
  //   getData();
  // }, []);

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
          {CARD_LIST}
          {/* index.tsx.(부모)파일안에 Card가 import(자식)되어 있는 상태. => 이런 상황일때 props이라는 개념 사용 가능. 부모(상위 컴포넌트)에서 자식(하위컴포넌트)한테 데이터 전달하는 것임. */}
        </div>
      </div>
      {/* 공통 푸터 UI 부분 */}
      <CommonFooter />
    </div>
  );
}

export default index;
