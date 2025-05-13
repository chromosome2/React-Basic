import React, { useState } from "react";
import styles from "./CommonSearchBar.module.scss";
import { useAtom } from "jotai";
import { searchState } from "@/recoil/atoms/searchState";

function CommonSearchBar() {
  const [search, setSearch] = useAtom(searchState); //useState랑 useRecoilState 뭐가 다른겨... //왜 searchState를 따로 파서 이렇게 할당해줘야하는지..? 여러군데에서 써야해서 그런가?
  const [text, setText] = useState("");
  const onChange = (event) => {
    //console.log(event.target.value);
    setText(event.target.value);
  };

  const onSearch = () => {
    if (text == "") {
      //input tag 안에 빈 값으로 검색하였을 때 == default searching => Korea
      setSearch("Korea");
    } else {
      setSearch(text); //작성한 input value 값 할당
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key == "Enter") {
      if (text == "") {
        //input tag 안에 빈 값으로 검색하였을 때 == default searching => Korea
        setSearch("Korea");
      } else {
        setSearch(text); //작성한 input value 값 할당
      }
    }
  };
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar_search}>
        <input
          type="text"
          placeholder="찾으실 이미지를 검색하세요."
          className={styles.searchBar_search_input}
          value={text}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
      </div>
    </div>
  );
}

export default CommonSearchBar;
