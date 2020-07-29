export const initialState = {
  store: null,
  isLoading: true,
  error: null,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STORE': {
      return {
        ...initialState,
        store: action.payload,
        isLoading: false,
      };
    }
    case 'SET_ERROR': {
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };
    }
  }
};
export const triggerAction = (dispatch, type, payload) => {
  dispatch({
    type,
    payload,
  });
};
