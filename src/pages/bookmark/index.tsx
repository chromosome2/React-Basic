import CommonHeader from "@/components/common/header/CommonHeader";
import { useEffect, useState } from "react";
import Card from "./components/Card";

import styles from "./styles/index.module.scss";

function index() {
  const [data, setData] = useState([]);
  const getData = () => {};

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <CommonHeader />
      <main className={styles.page_contents}>
        <Card />
      </main>
    </div>
  );
}

export default index;
