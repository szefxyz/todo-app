import styles from "./TodoItem.module.css";
import trashIcon from "./trash.svg";
import doneIcon from "./done.svg";

export function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
}) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {!done && (
        <button
          className={`${styles.button} ${styles.done}`}
          onClick={onDoneButtonClick}
        >
          {<img className={styles.img} src={doneIcon}></img>}
        </button>
      )}
      <button
        className={`${styles.button} ${styles.delete}`}
        onClick={onDeleteButtonClick}
      >
        {<img className={styles.img} src={trashIcon}></img>}
      </button>
    </li>
  );
}
