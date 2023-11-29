import { useMemo } from "react";
import styles from "./GroupComponent2.module.css";
const GroupComponent2 = ({
  enterYourEmailAddress,
  examplegmailcom,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
  groupDivBorderRadius,
  rectangleDivBorder,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
      borderRadius: groupDivBorderRadius,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft, groupDivBorderRadius]);

  const rectangleDivStyle = useMemo(() => {
    return {
      border: rectangleDivBorder,
    };
  }, [rectangleDivBorder]);

  return (
    <div className={styles.enterYourEmailAddressParent} style={groupDivStyle}>
      <div className={styles.enterYourEmail1}>{enterYourEmailAddress}</div>
      <div className={styles.componentChild} style={rectangleDivStyle} />
      <div className={styles.examplegmailcom}>{examplegmailcom}</div>
    </div>
  );
};

export default GroupComponent2;
