import UserContainer from "../components/UserContainer";
import Container from "../components/Container";
import styles from "./Frame3.module.css";

const Frame3 = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.groupWrapper}>
        <div className={styles.groupFrame}>
          <div className={styles.groupFrame}>
            <div className={styles.groupFrame}>
              <div className={styles.groupChild} />
              <div className={styles.rectangleGroup}>
                <div className={styles.groupItem} />
                <img
                  className={styles.groupInner}
                  alt=""
                  src="/rectangle-212.png"
                />
              </div>
              <UserContainer linkLeft="781.5px" />
              <b className={styles.text2} />
              <img className={styles.lineIcon} alt="" src="/undefined4.png" />
              <div className={styles.thngTinChung1}>Thông tin chung</div>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/undefined5.png"
              />
              <img
                className={styles.groupChild1}
                alt=""
                src="/rectangle-212.png"
              />
              <b className={styles.farmProjects}>Farm Projects</b>
              <div className={styles.rectangleDiv} />
              <div className={styles.rectangleWrapper}>
                <div className={styles.groupChild2} />
              </div>
              <div className={styles.rectangleWrapper}>
                <div className={styles.groupChild2} />
              </div>
              <div className={styles.viewFullDetails1}>View full details</div>
              <b className={styles.nngTri21}>Nông trại 2</b>
              <div className={styles.aaaa}>
                <ul className={styles.tngSThitB3ThiTit}>
                  <li className={styles.tngSThit}>Tổng số thiết bị : 3</li>
                  <li className={styles.tngSThit}>Thời tiết hiện tại : Nắng nhẹ</li>
                  <li className={styles.tngSThit}>Loại cây trồng : Cà chua</li>
                </ul>
              </div>
              <div className={styles.text3}>
                <p className={styles.blankLine}>&nbsp;</p>
              </div>
              <img
                className={styles.groupChild4}
                alt=""
                src="/undefined6.png"
              />
            </div>
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
