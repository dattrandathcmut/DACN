import { useState, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import FormChart from "../components/FormChart";
import styles from "./Frame.module.css";
const Frame = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const onTngQuanNngClick = useCallback(() => {
    navigate("/frame-36");
  }, [navigate]);

  const onNngSutDClick = useCallback(() => {
    navigate("/frame-38");
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/frame-35");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/frame-35");
  }, [navigate]);

  return (
    <>
      <div className={styles.groupParent}>
        <div className={styles.groupDiv}>
          <div className={styles.groupParent1}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
              <SideBar
                icon="/icon1.png"
                showNavLinks={false}
                showRectangleDiv={false}
                rectangleDivVisible={false}
                rectangleDivVisible1={false}
                rectangleDivVisible2={false}
                rectangleDivVisible3={false}
                sideBarBackground="linear-gradient(180deg, #055a05 99.99%, #6930c3)"
                sideBarWidth="303px"
                sideBarHeight="900px"
                sideBarPosition="absolute"
                sideBarTop="123px"
                sideBarLeft="2px"
                sideBarBorderRadius="0px var(--br-31xl) 0px 0px"
                rectangleDivBackgroundColor="1px solid #1b4332"
              />
              <b className={styles.text11} />
              <img className={styles.groupInner} alt="" src="/line-16.png" />
              <button
                className={styles.tngQuanNng1}
                onClick={onTngQuanNngClick}
              >
                Tổng quan nông trại
              </button>
              <button className={styles.nngSutD1} onClick={onNngSutDClick}>
                {" "}
                Năng suất dự kiến
              </button>
              <button className={styles.thngK1}> Thống kê</button>
              <button className={styles.giNng1}> Gợi ý năng suất</button>
              <div className={styles.rectangleDiv} />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-212.png"
              />
              <select className={styles.alignJustify1} onClick={openFrame} />
              <b className={styles.nngTri11}>Nông trại 1</b>
            </div>
            <div className={styles.chart2}>
              <div className={styles.container4} />
              <div className={styles.days}>
                <div className={styles.mon}>MON</div>
                <div className={styles.tue}>TUE</div>
                <div className={styles.wed}>WED</div>
                <div className={styles.thu}>THU</div>
                <div className={styles.fri}>FRI</div>
                <div className={styles.sat}>sat</div>
                <div className={styles.sun}>sun</div>
              </div>
              <div className={styles.amounts}>
                <div className={styles.div}>0</div>
                <div className={styles.div1}>25%</div>
                <div className={styles.div2}>50%</div>
                <div className={styles.div3}>75%</div>
                <div className={styles.div4}>100%</div>
              </div>
              <img
                className={styles.chartLinesIcon}
                alt=""
                src="/chart-lines.png"
              />
              <div className={styles.divider2} />
              <div className={styles.growthInfo}>
                <div className={styles.mon}>Nhiệt độ</div>
                <img
                  className={styles.arrowIcon2}
                  alt=""
                  src="/undefined.png"
                />
                <b className={styles.perceantage}>32C</b>
              </div>
            </div>
          </div>
          <div className={styles.chart6}>
            <div className={styles.container5} />
            <b className={styles.cardTitle}>Ánh sáng</b>
          </div>
          <div className={styles.chart5}>
            <div className={styles.container5} />
            <b className={styles.amount}>7,5</b>
            <b className={styles.cardTitle1}>Độ PH đất</b>
          </div>
          <FormChart />
          <div className={styles.chart21}>
            <div className={styles.container4} />
            <div className={styles.days}>
              <div className={styles.mon}>MON</div>
              <div className={styles.tue}>TUE</div>
              <div className={styles.wed}>WED</div>
              <div className={styles.thu}>THU</div>
              <div className={styles.fri}>FRI</div>
              <div className={styles.sat}>sat</div>
              <div className={styles.sun}>sun</div>
            </div>
            <div className={styles.amounts}>
              <div className={styles.div}>0</div>
              <div className={styles.div1}>25%</div>
              <div className={styles.div2}>50%</div>
              <div className={styles.div3}>75%</div>
              <div className={styles.div4}>100%</div>
            </div>
            <img
              className={styles.chartLinesIcon}
              alt=""
              src="/chart-lines1.png"
            />
            <div className={styles.divider2} />
            <div className={styles.growthInfo1}>
              <div className={styles.mon}>{`Độ ẩm không khí `}</div>
              <img className={styles.arrowIcon3} alt="" src="/undefined2.png" />
              <b className={styles.perceantage1}>80%</b>
            </div>
          </div>
          <button className={styles.backWrapper} onClick={onFrameButtonClick}>
            <div className={styles.back} onClick={onBackTextClick}>
              Back
            </div>
          </button>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame;
