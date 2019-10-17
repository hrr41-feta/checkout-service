import React from 'react';
import styles from './styles.css';

const Badge = ({badge}) => {
  // let badgeDisplay = <div className="badge">{badge}</div>
  // let noBadge = <div></div>
  // if (badge) {
  //   return badge;
  // } else {
  //   return noBadge;
  // }
  return (
    <div className={styles.personalizationLabel}>
      {badge && <span className={styles.badge}>{badge}</span>}
    </div>
  );
};

export default Badge;
