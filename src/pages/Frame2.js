import { useState, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import UserContainer from "../components/UserContainer";
import { useNavigate } from "react-router-dom";
import styles from "./Frame2.module.css";
const Frame2 = () => {
  const [isFrame1Open, setFrame1Open] = useState(false);
  const navigate = useNavigate();

  const onNngSutDClick = useCallback(() => {
    navigate("/frame-38");
  }, [navigate]);

  const onThngKClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  const onBackTextClick = useCallback(() => {
    navigate("/frame-35");
  }, [navigate]);

  return (
    <>
      <div className={styles.groupParent}>
        <div className={styles.groupDiv}>
          <div className={styles.groupParent1}>
            <div className={styles.groupParent2}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.rectangleWrapper}>
                  <div className={styles.groupItem} />
                </div>
                <UserContainer linkLeft="0px" />
                <b className={styles.text12} />
                <img className={styles.groupInner} alt="" src="/line-16.png" />
                <button className={styles.tngQuanNng1}>
                  Tổng quan nông trại
                </button>
                <button className={styles.nngSutD1} onClick={onNngSutDClick}>
                  {" "}
                  Năng suất dự kiến
                </button>
                <button className={styles.thngK1} onClick={onThngKClick}>
                  {" "}
                  Thống kê
                </button>
                <button className={styles.giNng1}> Gợi ý năng suất</button>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-212.png"
                />
                <div className={styles.alignJustify} onClick={openFrame1}>
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/undefined3.png"
                  />
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/undefined3.png"
                  />
                  <img
                    className={styles.vectorIcon6}
                    alt=""
                    src="/undefined3.png"
                  />
                  <img
                    className={styles.vectorIcon7}
                    alt=""
                    src="/undefined3.png"
                  />
                  <div className={styles.alignJustifyChild} />
                </div>
                <b className={styles.nngTri11}>Nông trại 1</b>
                <b className={styles.text13}>
                  <p className={styles.blankLine}>&nbsp;</p>
                </b>
                <div className={styles.groupChild1} />
                <b className={styles.im1}>Điểm 1</b>
                <b className={styles.nhit}>Nhiệt độ</b>
                <b className={styles.mKhngKh6}>Độ ẩm không khí</b>
                <b className={styles.f}>27F</b> 
                <div className={styles.lineDiv} />
                <div className={styles.groupChild1} />
                <b className={styles.im1}>Điểm 1</b>
                <b className={styles.nhit}>Nhiệt độ</b>
                <b className={styles.mKhngKh6}>Độ ẩm không khí</b>
                <b className={styles.mT}>Độ ẩm đất</b>
                <b className={styles.f}>27F</b>
                <b className={styles.b}>70%</b>
                <b className={styles.b1}>10%</b>
                <div className={styles.lineDiv} />
                <b className={styles.text14}>
                  <p className={styles.blankLine}>&nbsp;</p>
                </b>
                <b className={styles.text15}>
                  <p className={styles.blankLine}>&nbsp;</p>
                </b>
                <div className={styles.groupChild4} />
                <b className={styles.im3}>
                  <p className={styles.blankLine}>Điểm 3</p>
                </b>
                <b className={styles.nhit2}>Nhiệt độ</b>
                <b className={styles.mKhngKh8}>Độ ẩm không khí</b>
                <b className={styles.f2}>27F</b>
                <div className={styles.groupChild5} />
                <b className={styles.nhit2}>Nhiệt độ</b>
                <b className={styles.mKhngKh8}>Độ ẩm không khí</b>
                <b className={styles.mT1}>Độ ẩm đất</b>
                <b className={styles.nhSng}>Ánh sáng</b>
                <b className={styles.f2}>27F</b>
                <b className={styles.b2}>70%</b>
                <b className={styles.b3}>10%</b>
                <div className={styles.groupChild5} />
              </div>
              <b className={styles.text16}>
                <p className={styles.blankLine}>&nbsp;</p>
              </b>
              <b className={styles.text17}>
                <p className={styles.blankLine}>&nbsp;</p>
              </b>
            </div>
            <div className={styles.groupChild7} />
            <b className={styles.im2}>Điểm 2</b>
            <b className={styles.nhit4}>Nhiệt độ</b>
            <b className={styles.mKhngKh10}>Độ ẩm không khí</b>
            <b className={styles.f4}>27F</b>
            <div className={styles.groupChild8} />
            <b className={styles.nhSng1}>Ánh sáng</b>
            <button className={styles.backWrapper}>
              <div className={styles.back} onClick={onBackTextClick}>
                Back
              </div>
            </button>
          </div>
          <b className={styles.nhit4}>Nhiệt độ</b>
          <b className={styles.mKhngKh10}>Độ ẩm không khí</b>
          <b className={styles.mT2}>Độ ẩm đất</b>
          <b className={styles.nhSng2}>Ánh sáng</b>
          <b className={styles.f4}>27F</b>
          <b className={styles.b4}>70%</b>
          <b className={styles.b5}>10%</b>
          <div className={styles.groupChild8} />
        </div>
      </div>
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <FrameComponent onClose={closeFrame1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame2;
