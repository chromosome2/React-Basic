import { atom } from "jotai";

import axios from "axios"; //api
import api_key from "@pages/index/apiKey.tsx";
import { searchState } from "@/recoil/atoms/searchState";
import { pageState } from "@/recoil/atoms/pageState";

export const imageData = atom(async (get) => {
  const searchValue = get(searchState);
  const pageValue = get(pageState);

  //API호출
  try {
    const res = await axios.get(
      `${api_key.API_URL}?query=${searchValue}&client_id=${api_key.API_KEY}&page=${pageValue}&per_page=${api_key.PER_PAGE}`
    );

    return res.data.results; //return이 있어야 이 get이라는 속성을 통해서 어떤 값을 조회하는 거라고 컴퓨터가 이해함.
  } catch (error) {
    console.log(error);
  }
});
