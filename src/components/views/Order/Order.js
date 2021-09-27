import React from 'react';
import styles from './Order.module.scss';
import TopBar from '../../common/TopBar/TopBar.js';
import OrderNavigation from '../../common/OrderNavigation/OrderNavigationContainer';
import  OrderForm  from '../../features/OrderForm/OrderFormContainer.js';


function Order() {
  return (
    <div className={styles.order}>
      <TopBar black={true} open={true} rwd={true} />
      <OrderForm/>
      <OrderNavigation goBack={true}/>
    </div>
  );
}

export default Order;
