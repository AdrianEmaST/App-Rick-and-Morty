import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{props.name}</h2>
      <div className={styles.bajada}>
        <h2 className={styles.bajadah2}>Species: {props.species}</h2>
        <h2 className={styles.bajadah2}>Gender: {props.gender}</h2>
        <div className={styles.btncontainer}>
          <div className={styles.btncenter}>
            <button className={styles.btn} onClick={props.onClose}>
              <span>Cerrar carta</span>
            </button>
          </div>
        </div>
      </div>
      <img className={styles.imagen} src={props.image} alt="" />
    </div>
  );
}
