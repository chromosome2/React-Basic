import React, { useEffect } from "react";
import styles from "./CommonNav.module.scss";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navJson from "./nav.json";
import { pageState } from "@/recoil/atoms/pageState";
import { useAtom } from "jotai";
import { searchState } from "@/recoil/atoms/searchState";

interface Navigation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

function CommonNav() {
  const location = useLocation();
  const [navigation, setNavigation] = useState<Navigation[]>(navJson);
  const [page, setPage] = useAtom(pageState);
  const [search, setSearch] = useAtom(searchState);

  useEffect(() => {
    console.log(location.pathname);
    navigation.forEach((nav: Navigation) => {
      nav.isActive = false;

      if (
        nav.path == location.pathname ||
        location.pathname.includes(nav.path)
      ) {
        nav.isActive = true;
        setSearch(nav.searchValue);
        setPage(1);
      }
    });
    setNavigation([...navigation]); //navigation에 세팅 재할당.
  }, [location.pathname]); //페이지가 마운트된 후에 동작하는 느낌 //location.pathname이 변경될때마다 동작하게 하기.

  //useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복호출.
  const navLinks = navigation.map((item: Navigation) => {
    return (
      <Link
        to={item.path}
        className={
          item.isActive
            ? `${styles.navigation_menu} ${styles.active}`
            : `${styles.navigation_menu} ${styles.inactive}`
        }
        key={item.path}
      >
        <span className={styles.navigation_menu_label}>{item.label}</span>
      </Link>
    );
  });

  return <nav className={styles.navigation}>{navLinks}</nav>;
}

export default CommonNav;
