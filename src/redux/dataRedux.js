import Axios from 'axios';

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
const PPP_ORDER = createActionName('PPP_ORDER');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const addToOrder = (payload) => ({ payload, type: ADD_ORDER });
export const xd = (payload) => ({ payload, type: PPP_ORDER });

/* thunk creators */
export const fetchPublished = () => {
  return (dispatch) => {
    dispatch(fetchStarted());
    Axios.get('http://localhost:8000/api/products')
      .then((res) => {
        //if(getState().posts.data = [] && getState().posts.loading.active == true)
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
      Axios.post('http://localhost:8000/api/products', product).then((res) => {
        dispatch(addToOrder(res.data));
        //console.log(res.data);
        localStorage.setItem('lsbasket', JSON.stringify([...getState().data.basket]));
        //dispatch(sendOrder(getState().data.basket));
        alert('New advertisment added to basket!');
      });
      dispatch(fetchPublished());
    } catch (e) {
      alert(e.message);
    }
  };
};
/*export const sendOrder = (order) => {
  return () => {
    try {
      Axios.post('http://localhost:8000/api/order', order);
    } catch (e) {
      alert(e.message);
    }
  };
};*/

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
      JSON.parse(localStorage.getItem('lsbasket')) == null ?bsketFromlocalStorage = [] :bsketFromlocalStorage = JSON.parse(localStorage.getItem('lsbasket'));
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
      let localStorageBasket= '';
      JSON.parse(localStorage.getItem('lsbasket')) == null ? localStorageBasket =[] :localStorageBasket = JSON.parse(localStorage.getItem('lsbasket'));
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

    case PPP_ORDER: {
      return {
        ...statePart,
        basket: action.payload,
      };
    }
    default:
      return statePart;
  }
};
