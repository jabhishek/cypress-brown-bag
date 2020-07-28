import { Page } from "../components/Page";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { MOCK_STORES } from "../MOCK_STORES";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

export const ListPage = () => {
  return (
    <Page>
      <h1>Search results</h1>

      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <h3>
          <em>Displaying {MOCK_STORES.length} stores</em>
        </h3>
      </div>
      <List>
        {MOCK_STORES.map((store) => {
          return (
            <ListItem
              key={store.code}
              style={{ backgroundColor: "#f0f0f0", marginBottom: 4 }}
            >
              <Link component={RouterLink} to={`/store/${store.code}`}>
                {store.name}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Page>
  );
};

export default ListPage;
