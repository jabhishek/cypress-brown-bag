import { useEffect, useReducer } from 'react';
import { initialState, reducer, triggerAction } from './reducer';
import { getStoreByCode } from '../../api';

export const useFetchStoreData = (code) => {
  const [{ error, store, isLoading }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getStoreByCode(code).then(
      (storeData) => {
        triggerAction(dispatch, 'SET_STORE', storeData);
      },
      (err) => {
        const { status } = err.response;
        if (status === 404) {
          triggerAction(dispatch, 'SET_ERROR', 'Store not found');
        } else {
          triggerAction(dispatch, 'SET_ERROR', 'Oops! Something went wrong!');
        }
      },
    );
  }, [code]);

  return { error, store, isLoading };
};
