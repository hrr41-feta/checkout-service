import React from 'react';
import styles from './styles.css';
import StarRatingComponent from 'react-star-rating-component';

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
      {badge && <span className={styles.badge}><StarRatingComponent
        name='badgeStar'
        starCount={1}
        value={1}
        editing={false}
        starColor={'#000'}
      />
      {badge}</span>}
    </div>
  );
};

export default Badge;
