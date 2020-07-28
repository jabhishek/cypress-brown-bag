import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Page } from '../components/Page';
import { searchStores } from '../api';
import { StoresList } from '../components/StoresList';
import { H1 } from '../components/H1';

export const Home = () => {
  const [stores, setStores] = React.useState(null);
  const [searchText, setSearchText] = React.useState('');

  React.useEffect(() => {
    searchStores(searchText).then((response) => {
      if (response && Array.isArray(response)) {
        setStores(response);
      }
    });
  }, [searchText]);

  return (
    <Page>
      <H1>Search Stores</H1>
      <TextField
        id="search-text"
        label="Enter a search term"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <StoresList stores={stores} />
    </Page>
  );
};

export default Home;
