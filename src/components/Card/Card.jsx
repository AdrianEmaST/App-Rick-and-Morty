import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {

const dispatch = useDispatch();
const myFavorites = useSelector(state => state.myFavorites)

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(props.id))
    } else {
      setIsFav(true);
      dispatch(addFavorite(props))
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

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
            {isFav ? (
              <button onClick={handleFavorite}>❤️</button>
            ) : (
              <button onClick={handleFavorite}>🤍</button>
            )}
          </div>
        </div>
      </div>
      <img className={styles.imagen} src={props.image} alt="" />
    </div>
  );
}
