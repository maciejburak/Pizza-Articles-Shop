/* selectors */
export const getAll = ({ data }) => data;
export const getBasket = ({ data }) => data.basket;
/* action name creator */
const reducerName = 'data';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_ORDER = createActionName('ADD_ORDER');
const DEFAULT_CLICK = createActionName('DEFAULT_CLICK');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const addOrder = (payload) => ({ payload, type: ADD_ORDER });
export const defaultClick = (payload) => ({ payload, type: DEFAULT_CLICK });

/* thunk creators */
/*export const fetchPublished = () => {
  return (dispatch) => {
    dispatch(fetchStarted());
    Axios.get('http://localhost:8000/api/posts')
      .then((res) => {
        //if(getState().posts.data = [] && getState().posts.loading.active == true)
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message));
      });
  };
};

export const fetchPost = (post) => {
  return (dispatch) => {
    try {
      post.status = 'published';
      Axios.post('http://localhost:8000/api/posts', post).then((res) => {
        if (typeof res.data == 'string') alert(res.data);
        else {
          dispatch(addAdvCreator(res.data));
          alert('New advertisment added correctly!');
        }
      });
      dispatch(fetchPublished());
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
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
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
      if (statePart.basket.includes(action.payload)) {
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
      } else
        return {
          ...statePart,
          basket: [...statePart.basket, action.payload],
        };
    }

    default:
      return statePart;
  }
};
