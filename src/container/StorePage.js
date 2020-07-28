import { Page } from '../components/Page';
import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { useParams } from 'react-router';
import MOCK_STORES from '../../server/MOCK_STORES';
import LinearProgress from '@material-ui/core/LinearProgress';
import { H1 } from '../components/H1';

const useFetchStoreData = (code) => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const storeData = MOCK_STORES.find((store) => {
      return store.code === code;
    });
    setStore(storeData);
  }, [code]);

  return { store };
};

export const StorePage = () => {
  const { code } = useParams();
  const { store } = useFetchStoreData(code);

  return (
    <Page>
      <H1>Store Details</H1>
      {store ? (
        <p>
          Showing details for <b>{get(store, 'name')}</b>
        </p>
      ) : (
        <LinearProgress />
      )}
    </Page>
  );
};

export default StorePage;
