import React from 'react';

const Badge = ({badge}) => {
  // let badgeDisplay = <div className="badge">{badge}</div>
  // let noBadge = <div></div>
  // if (badge) {
  //   return badge;
  // } else {
  //   return noBadge;
  // }
  return (
    <div className="badge">
      {badge && <span>{badge}</span>}
    </div>
  );
};

export default Badge;
