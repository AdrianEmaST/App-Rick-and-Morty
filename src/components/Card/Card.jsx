import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <Link to={`/detail/${props.id}`}>
        <h2 className={styles.name}>{props.name}</h2>
      </Link>
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
