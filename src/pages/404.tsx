import styles from "../styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img src="/404.png" className={styles.error__image} />
      <h1>404 || Page Not Found</h1>
    </div>
  );
};

export default Custom404;
