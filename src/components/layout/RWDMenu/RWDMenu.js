import React from 'react';
import PropTypes from 'prop-types';
import styles from './RWDMenu.module.scss';

function RWDMenu({
  toggleValue,
  activeBucket,
  funcSetTV,
  funcSetAB,
  funcSetRWD,
}) {
  return (
    <div className={styles.rwdMenu}>
      <div className={styles.hold}>
        <div className={styles.rwdLink1}>
          <a
            onClick={() => (funcSetRWD(false), funcSetAB(false))}
            href="/recipe"
          >
            PIZZA RECIPE
          </a>
        </div>
      </div>
      <div className={styles.hold}>
        <div className={styles.rwdLink2}>
          <a
            onClick={
              !activeBucket ? () => funcSetAB(true) : () => funcSetAB(false)
            }
          >
            BASKET
          </a>
        </div>
      </div>
      <div className={styles.hold}>
        <div className={styles.rwdLink3}>
          <a
            onClick={
              toggleValue == false
                ? () => (funcSetTV(true), funcSetRWD(false), funcSetAB(false))
                : null
            }
          >
            SHOP
          </a>
        </div>
      </div>
    </div>
  );
}

RWDMenu.propTypes = {
  funcSetRWD: PropTypes.func,
  activeBucket: PropTypes.bool,
  toggleValue: PropTypes.bool,
  funcSetTV: PropTypes.func,
  funcSetAB: PropTypes.func,
};

export default RWDMenu;
