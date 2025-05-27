import CommonHeader from "@/components/common/header/CommonHeader";
import { useEffect, useState } from "react";
import Card from "./components/Card";

import styles from "./styles/index.module.scss";
import { CardDTO } from "../index/types/card";

function index() {
  const [data, setData] = useState([]);
  const getData = () => {
    const getLocalStorage = JSON.parse(localStorage.getItem("bookmark"));

    if (getLocalStorage || getLocalStorage != null) setData(getLocalStorage);
    else setData([]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <CommonHeader />
      <main className={styles.page_contents}>
        {data.length == 0 ? (
          <div className={styles.page_contents_noData}>
            조회 가능한 데이터가 없습니다.
          </div>
        ) : (
          data.map((item: CardDTO) => {
            return <Card prop_data={item} key={item.id} />;
          })
        )}
      </main>
    </div>
  );
}

export default index;
