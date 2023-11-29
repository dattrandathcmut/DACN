import { useCallback } from "react";
import UserContainer from "../components/UserContainer";
import { useNavigate } from "react-router-dom";
import styles from "./Frame1.module.css";
const Frame1 = () => {
  const navigate = useNavigate();

  const onTngQuanNngClick = useCallback(() => {
    navigate("/frame-36");
  }, [navigate]);

  const onThngKTextClick = useCallback(() => {
    navigate("/frame-37");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/frame-35");
  }, [navigate]);

  const onTnhTonLiClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.groupParent}>
      <div className={styles.groupDiv}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupDiv}>
            <div className={styles.groupDiv}>
              <div className={styles.groupDiv}>
                <div className={styles.groupChild} />
                <div className={styles.rectangleWrapper}>
                  <div className={styles.groupItem} />
                </div>
                <UserContainer linkLeft="1px" />
                <b className={styles.text3} />
                <img className={styles.groupInner} alt="" src="/line-16.png" />
                <div className={styles.tngQuanNng1} onClick={onTngQuanNngClick}>
                  Tổng quan nông trại
                </div>
                <div className={styles.nngSutD2}>Năng suất dự kiến</div>
                <div className={styles.thngK} onClick={onThngKTextClick}>
                  Thống kê
                </div>
                <div className={styles.giNng1}>Gợi ý năng suất</div>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-2131.png"
                />
                <img
                  className={styles.alignJustifyIcon}
                  alt=""
                  src="/alignjustify.png"
                />
                <b className={styles.nngTri11}>Nông trại 1</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backWrapper}>
          <div className={styles.back} onClick={onBackTextClick}>
            Back
          </div>
        </div>
        <b className={styles.text4}>
          <p className={styles.blankLine}>&nbsp;</p>
        </b>
        <b className={styles.text5}>
          <p className={styles.blankLine}>&nbsp;</p>
        </b>
        <img
          className={styles.groupChild1}
          alt=""
          src="/rectangle-261@2x.png"
        />
        <div
          className={styles.ktheGingerProjectParent}
          data-scroll-to="groupContainer"
        >
          <div className={styles.ktheGingerProject}>KN</div>
          <div className={styles.duration}>
            <p
              className={styles.blankLine}
            >{`        Thời gian phát triển `}</p>
            <p className={styles.blankLine}> 10-14 weeks</p>
          </div>
          <div className={styles.ngyGieoTrngContainer}>
            <p className={styles.blankLine}>{`        Ngày gieo trồng  `}</p>
            <p className={styles.blankLine}> 1-2-2023</p>
          </div>
          <div className={styles.ngyThuHochContainer}>
            <p className={styles.blankLine}>Ngày thu hoạch (dự kiến )</p>
            <p className={styles.blankLine}> 8-7-2023</p>
          </div>
          <div className={styles.tngDinTchContainer}>
            <p className={styles.blankLine}>Tổng diện tích (ha )</p>
            <p className={styles.blankLine}> 1.3</p>
          </div>
          <div className={styles.nngSutDContainer}>
            <p className={styles.blankLine}>Năng suất dự kiến (kg)</p>
            <p className={styles.blankLine}> 60.000</p>
          </div>
          <div className={styles.termsAndConditions1}>Terms and conditions</div>
        </div>
        <img className={styles.groupChild2} alt="" src="/rectangle-271.png" />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild3} />
          <div className={styles.tnhTonLi1} onClick={onTnhTonLiClick}>
            Tính toán lại
          </div>
        </div>
        <div className={styles.chevronsRight1} />
        <div className={styles.chevronRight1} />
      </div>
    </div>
  );
};

export default Frame1;
