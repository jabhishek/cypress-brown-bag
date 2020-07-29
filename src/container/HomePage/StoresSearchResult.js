import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export const StoresSearchResult = ({ stores }) => {
  if (!stores || !stores.length) {
    return (
      <h3>
        <strong>No results found!</strong>
      </h3>
    );
  }
  return (
    <div style={{ marginTop: 40 }}>
      <h3>
        <strong>Displaying {stores.length} stores</strong>
      </h3>
      <List style={{ width: '100%' }}>
        {stores.map((store) => {
          return (
            <ListItem
              key={store.code}
              style={{ backgroundColor: 'hsl(0, 50%, 95%)', marginBottom: 8 }}
            >
              <Link component={RouterLink} to={`/store/${store.code}`}>
                {store.code} - {store.name}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
