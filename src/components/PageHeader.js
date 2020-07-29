import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import Link from '@material-ui/core/Link';

export const PageHeader = () => {
  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: 20 }}>
      <Link component={RouterLink} to="/" style={{ marginRight: 12 }}>
        Home
      </Link>
    </header>
  );
};
