import clsx from 'clsx';
import React from 'react';

const namespace = 'button';

export const Button = ({ children, ...props }) => {
  const { type = 'secondary' } = props;

  const className = clsx(namespace, `${namespace}__${type}`);

  return (
    <button
      className={className}
      onClick={() => {
        console.log('first');
      }}
    >
      {children}
    </button>
  );
};
