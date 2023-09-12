import React from 'react';

export const Container = ({ children, ...props }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1280px',
        padding: '10px',
        height: '100%',
      }}
      {...props}>
      {children}
    </div>
  );
};
