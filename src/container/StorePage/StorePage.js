import { Page } from '../../components/Page';
import React from 'react';
import { useParams } from 'react-router';
import { H1 } from '../../components/H1';
import { useFetchStoreData } from './useFetchStoreData';

const StoreDetails = ({ code }) => {
  const { store, error, isLoading } = useFetchStoreData(code);

  if (isLoading) {
    return <h3>Loading!!</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }
  return (
    <h3>
      Showing details for <b>{store.name}</b>
    </h3>
  );
};

export const StorePage = () => {
  const { code } = useParams();

  return (
    <Page>
      <H1 data-test-id="store-details-title">Store Details</H1>
      <div data-test-id="store-details-section">
        <StoreDetails code={code} />
      </div>
    </Page>
  );
};

export default StorePage;
