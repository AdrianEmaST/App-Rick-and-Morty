import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  let keyCreation = 0;
  const { characters, onClose } = props;
  return (
    <div className={styles.cards}>
      {characters.map((e) => (
        <Card
          key={keyCreation++}
          id={e.id}
          name={e.name}
          species={e.species}
          gender={e.gender}
          image={e.image}
          onClose={() => onClose(e.id)}
        />
      ))}
    </div>
  );
}
