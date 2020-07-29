import React from 'react';

export const H1 = ({ children, ...props }) => {
  return (
    <h1
      {...props}
      style={{ textAlign: 'center', borderBottom: '1px solid #e6e6e6', paddingBottom: 10 }}
    >
      {children}
    </h1>
  );
};
