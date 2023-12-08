import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Container.module.css";
const Container = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/frame-36");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/frame-36");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/frame-36");
  }, [navigate]);

  const onViewFullDetailsClick = useCallback(() => {
    navigate("/frame-36");
  }, [navigate]);

  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleWrapper}>
        <div className={styles.groupChild} />
      </div>
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer1Click}
      >
        <button className={styles.groupItem} onClick={onRectangleButtonClick} />
      </div>
      <button className={styles.groupInner} onClick={onRectangleButton1Click} />
      <div className={styles.viewFullDetails1} onClick={onViewFullDetailsClick}>
        View full details
      </div>
      <b className={styles.nngTri11}>Nông trại 1</b>
      <div className={styles.aaaa}>
        <ul className={styles.tngSThitB3ThiTit}>
          <li className={styles.tngSThit}>Tổng số thiết bị : 3</li>
          <li className={styles.tngSThit}>Thời tiết hiện tại : Nắng nhẹ</li>
          <li className={styles.tngSThit}>Loại cây trồng : Cà chua</li>
        </ul>
      </div>
      <div className={styles.text1}>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>

    </div>
  );
};

export default Container;
