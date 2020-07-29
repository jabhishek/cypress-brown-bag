import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Page } from '../../components/Page';
import { searchStores } from '../../api';
import { StoresSearchResult } from './StoresSearchResult';
import { H1 } from '../../components/H1';

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
        data-test-id="search-text-field"
        id="search-text-field"
        label="Enter a search term"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div data-test-id="search-results-section">
        <StoresSearchResult stores={stores} />
      </div>
    </Page>
  );
};

export default Home;
