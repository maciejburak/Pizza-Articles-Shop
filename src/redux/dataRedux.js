import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

/* selectors */
export const getProducts = ({ data }) => data.products;
export const getPictures = ({ data }) => data.pictures;
export const getBasket = ({ data }) => data.basket;

/* action name creator */

const reducerName = 'data';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_ORDER = createActionName('ADD_ORDER');
const DELATE_ORDER = createActionName('DELATE_ORDER');
const CLEAR_BASKET = createActionName('CLEAR_BASKET');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const addToOrder = (payload) => ({ payload, type: ADD_ORDER });
export const delateFromOrder = (payload) => ({ payload, type: DELATE_ORDER });
export const deleteProductsFromBasket = (payload) => ({
  payload,
  type: CLEAR_BASKET,
});

/* thunk creators */
export const fetchPublished = () => {
  return (dispatch) => {
    dispatch(fetchStarted());
    Axios.get('http://localhost:8000/api/products')
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message));
      });
  };
};

export const fetchOrder = (product) => {
  return (dispatch, getState) => {
    try {
      dispatch(addToOrder(product));
      localStorage.setItem(
        'lsbasket',
        JSON.stringify([...getState().data.basket])
      );
      alert('New advertisment added to basket!');
      dispatch(fetchPublished());
    } catch (e) {
      alert(e.message);
    }
  };
};

export const fetchOrderinProgress = (description) => {
  return (dispatch, getState) => {
    try {
      Axios.post('http://localhost:8000/api/orders', {
        basket: getState().data.basket,
        key: uuidv4(),
        status: 'in progress',
        description: description,
      });
    } catch (e) {
      alert(e.message);
    }
  };
};

export const fetchOrderDone = () => {
  return (dispatch) => {
    try {
      Axios.put(`http://localhost:8000/api/doneOrder`);
    } catch (e) {
      alert(e.message);
    }
  };
};
export const fetchCurrentOrder = () => {
  return (dispatch) => {
    try {
      Axios.get('http://localhost:8000/api/doneOrder').then((res) => {
        return res.data;
      });
    } catch (e) {
      alert(e.message);
    }
  };
};

export const delateWholeOrder = (key) => {
  return (dispatch) => {
    try {
      Axios.delete('http://localhost:8000/api/deleteOrder', {
        headers: {},
        data: {
          key: key,
        },
      });
    } catch (e) {
      alert(e.message);
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      let bsketFromlocalStorage = '';
      JSON.parse(localStorage.getItem('lsbasket')) == null
        ? (bsketFromlocalStorage = [])
        : (bsketFromlocalStorage = JSON.parse(
          localStorage.getItem('lsbasket')
        ));
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        products: action.payload,
        basket: bsketFromlocalStorage,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
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

    case DELATE_ORDER: {
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
    case CLEAR_BASKET: {
      localStorage.setItem('lsbasket', JSON.stringify([]));
      return {
        ...statePart,
        basket: [],
      };
    }
    default:
      return statePart;
  }
};
