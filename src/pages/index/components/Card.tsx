import styles from "./Card.module.scss";
import { CardDTO } from "../types/card";

interface Props {
  data: CardDTO;
}

function Card({ data }: Props) {
  const openDialog = () => {
    console.log("함수호출");
  };
  return (
    <div className={styles.card} onClick={openDialog}>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className={styles.card_image}
      />
    </div>
  );
}

export default Card;
