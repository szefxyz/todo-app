import styles from "./Button.module.css";

export function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
    >
      {children}
    </button>
  );
}
