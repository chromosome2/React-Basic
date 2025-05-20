import React from "react";
import { useMemo } from "react";
import { useAtomValue } from "jotai";
import { imageData } from "@/recoil/selectors/imageSelectors.ts";
import { CardDTO } from "./types/card";
import Card from "./components/Card";

interface props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imgData: CardDTO;
  setImgData: React.Dispatch<React.SetStateAction<CardDTO | undefined>>;
}
function CardList({ open, setOpen, imgData, setImgData }: props) {
  const imgSelector = useAtomValue(imageData);
  const CARD_LIST = useMemo(() => {
    if (imgSelector?.results?.length) {
      const result = imgSelector.results.map((card: CardDTO) => {
        return (
          <Card
            data={card}
            key={card.id}
            handleDialog={setOpen}
            handleSetData={setImgData}
          />
        ); //data에 card 데이터를 props를 시킨다. props시키는 부분임
      });
      return result;
    } else {
      return <div>loading...</div>;
    }
  }, [imgSelector]);
  return CARD_LIST;
}

export default CardList;
