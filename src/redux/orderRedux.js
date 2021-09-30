import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

/* selectors */
export const getBasket = ({ order }) => order.basket;
export const getDescription = ({ order }) => order.description;
/* action name creator */
const reducerName = 'basket';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const APPLY_BASKET = createActionName('APPLY_BASKET');
const ADD_ORDER = createActionName('ADD_ORDER');
const ADD_DESCRIPTION = createActionName('ADD_DESCRIPTION');
const DELETE_ORDER_POSITION = createActionName('DELETE_ORDER_POSITION');
const CLEAR_ORDER = createActionName('CLEAR_ORDER');

/* action creators */
export const applyBasket = (payload) => ({ payload, type: APPLY_BASKET });
export const addToOrder = (payload) => ({ payload, type: ADD_ORDER });
export const addDescription = (payload) => ({ payload, type: ADD_DESCRIPTION });
export const delateFromOrder = (payload) => ({
  payload,
  type: DELETE_ORDER_POSITION,
});
export const deletAllOrder = (payload) => ({ payload, type: CLEAR_ORDER });

/* thunk creators */
export const addOrder = (product) => {
  return (dispatch, getState) => {
    try {
      dispatch(addToOrder(product));
      localStorage.setItem(
        'lsbasket',
        JSON.stringify([...getState().order.basket])
      );
      alert('New advertisment added to basket!');
    } catch (e) {
      alert(e.message);
    }
  };
};

export const postOrderinProgress = (description) => {
  return (dispatch, getState) => {
    try {
      localStorage.setItem('description', JSON.stringify(description));
      Axios.post('http://localhost:8000/api/orders/postOrder', {
        basket: getState().order.basket,
        key: uuidv4(),
        status: 'in progress',
        description: description,
        personalData: [],
      });
    } catch (e) {
      alert(e.message);
    }
  };
};

export const putOrderDone = (personalData) => {
  return (dispatch) => {
    try {
      Axios.put(`http://localhost:8000/api/orders/saveOrder`, {
        data: personalData,
      });
    } catch (e) {
      alert(e.message);
    }
  };
};

export const delateWholeOrder = () => {
  return (dispatch) => {
    try {
      Axios.delete('http://localhost:8000/api/orders/deleteOrder');
    } catch (e) {
      alert(e.message);
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case APPLY_BASKET: {
      let bsketFromlocalStorage = '';
      JSON.parse(localStorage.getItem('lsbasket')) == null
        ? (bsketFromlocalStorage = [])
        : (bsketFromlocalStorage = JSON.parse(
          localStorage.getItem('lsbasket')
        ));
      let descriptionFromlocalStorage = '';
      JSON.parse(localStorage.getItem('description')) == null
        ? (descriptionFromlocalStorage = '')
        : (descriptionFromlocalStorage = JSON.parse(
          localStorage.getItem('description')
        ));
      return {
        description: descriptionFromlocalStorage,
        basket: bsketFromlocalStorage,
      };
    }
    case ADD_ORDER: {
      let localStorageBasket = '';
      JSON.parse(localStorage.getItem('lsbasket')) == null
        ? (localStorageBasket = [])
        : (localStorageBasket = JSON.parse(localStorage.getItem('lsbasket')));
      if (localStorageBasket.some((item) => item.name == action.payload.name)) {
        const actualBasket = statePart.basket;
        for (let element of actualBasket) {
          if (element.name == action.payload.name) {
            element.value = element.value + 1;
            element.price = element.price + action.payload.price;
          }
        }
        return {
          ...statePart,
          basket: actualBasket,
        };
      } else {
        return {
          ...statePart,
          basket: [...statePart.basket, action.payload],
        };
      }
    }
    case ADD_DESCRIPTION: {
      return {
        ...statePart,
        description: action.payload,
      };
    }
    case DELETE_ORDER_POSITION: {
      const actualBasket = JSON.parse(localStorage.getItem('lsbasket'));
      const filteredElement = actualBasket.filter(
        (item) => item.name == action.payload
      );
      actualBasket.splice(actualBasket.indexOf(filteredElement[0]), 1);
      localStorage.setItem('lsbasket', JSON.stringify(actualBasket));
      return {
        ...statePart,
        basket: actualBasket,
      };
    }
    case CLEAR_ORDER: {
      localStorage.setItem('lsbasket', JSON.stringify([]));
      localStorage.setItem('description', JSON.stringify(''));
      return {
        description: '',
        basket: [],
      };
    }
    default:
      return statePart;
  }
};
