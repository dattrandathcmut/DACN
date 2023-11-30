import styles from "./FormChart.module.css";
const FormChart = () => {
  return (
    <div className={styles.chart4}>
      <div className={styles.container1} />
      <div className={styles.growthInfo}>
        <div className={styles.growthPercentage}>
          <img className={styles.arrowIcon1} alt="" src="/undefined1.png" />
          <div className={styles.number}>+21.01%</div>
        </div>
        <b className={styles.amount}>71,01%</b>
      </div>
      <b className={styles.cardTitle}>Độ ẩm đất</b>
    </div>
  );
};

export default FormChart;
