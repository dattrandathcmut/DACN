import { useMemo } from "react";
import styles from "./GroupComponent.module.css";
const GroupComponent = ({
  firstName,
  userName,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
}) => {
<<<<<<< HEAD
  const groupDiv2Style = useMemo(() => {
=======
  const groupDivStyle = useMemo(() => {

>>>>>>> Incoming
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  return (
<<<<<<< HEAD
    <div className={styles.firstNameParent} style={groupDiv2Style}>
=======
    <div className={styles.firstNameParent} style={groupDivStyle}>

>>>>>>> Incoming
      <div className={styles.firstName}>{firstName}</div>
      <div className={styles.componentChild} />
      <div className={styles.userName}>{userName}</div>
    </div>
  );
};

export default GroupComponent;
