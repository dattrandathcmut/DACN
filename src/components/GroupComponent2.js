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
<<<<<<< HEAD
  const groupDivStyle = useMemo(() => {
=======
  const groupDiv2Style = useMemo(() => {

>>>>>>> Incoming
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
      borderRadius: groupDivBorderRadius,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft, groupDivBorderRadius]);

<<<<<<< HEAD
  const rectangleDivStyle = useMemo(() => {
=======
  const rectangleDiv2Style = useMemo(() => {

>>>>>>> Incoming
    return {
      border: rectangleDivBorder,
    };
  }, [rectangleDivBorder]);

  return (
<<<<<<< HEAD
    <div className={styles.enterYourEmailAddressParent} style={groupDivStyle}>
=======
    <div className={styles.enterYourEmailAddressParent} style={groupDiv2Style}>

>>>>>>> Incoming
      <div className={styles.enterYourEmail1}>{enterYourEmailAddress}</div>
<<<<<<< HEAD
      <div className={styles.componentChild} style={rectangleDivStyle} />
=======
      <div className={styles.componentChild} style={rectangleDiv2Style} />

>>>>>>> Incoming
      <div className={styles.examplegmailcom}>{examplegmailcom}</div>
    </div>
  );
};

export default GroupComponent2;
