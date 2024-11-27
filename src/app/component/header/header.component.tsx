import styles from "./header.module.scss";
export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_main}>This is header</div>
    </div>
  );
}
