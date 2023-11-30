import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Container.module.css";
const Container = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const onRectangle1Click = useCallback(() => {
=======
  const onGroupContainer1Click = useCallback(() => {

>>>>>>> Incoming
    navigate("/frame-36");
  }, [navigate]);

<<<<<<< HEAD
=======
  const onRectangleButtonClick = useCallback(() => {
    navigate("/frame-36");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/frame-36");
  }, [navigate]);

  const onViewFullDetailsClick = useCallback(() => {
    navigate("/frame-36");
  }, [navigate]);


>>>>>>> Incoming
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleWrapper}>
        <div className={styles.groupChild} />
      </div>
<<<<<<< HEAD
      <div className={styles.rectangleWrapper}>
        <div className={styles.groupItem} onClick={onRectangle1Click} />
=======
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer1Click}
      >
        <button className={styles.groupItem} onClick={onRectangleButtonClick} />

>>>>>>> Incoming
      </div>
<<<<<<< HEAD
      <img className={styles.groupInner} alt="" src="/rectangle-233@2x.png" />
      <div className={styles.viewFullDetails1}>View full details</div>
=======
      <button className={styles.groupInner} onClick={onRectangleButton1Click} />
      <div className={styles.viewFullDetails1} onClick={onViewFullDetailsClick}>
        View full details
      </div>

>>>>>>> Incoming
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
