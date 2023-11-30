import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ResetPasswordContainer from "../components/ResetPasswordContainer";
import styles from "./Frame4.module.css";

const Frame4 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {

    navigate("/frame-35");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {

    navigate("/desktop-23");
  }, [navigate]);

  // Depending on the logic of your program, you can use the respective callback for your onClick handler
  // For the sake of this example, I've used onRectangleClickFrame35
  return (
    <div className={styles.images1Parent}>
      <img className={styles.images1Icon} alt="" src="/images-1@2x.png" />
      <div className={styles.backWrapper}>
        <div className={styles.back}>Back</div>
      </div>
      <ResetPasswordContainer />
      <img
        className={styles.frameChild}
        alt=""
        src="/rectangle-208.png"
        onClick={onRectangleClick}

      />
    </div>
  );
};

export default Frame4;
