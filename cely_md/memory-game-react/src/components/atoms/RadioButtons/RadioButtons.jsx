import React from 'react';

const namespace = 'radio-buttons';

export const RadioButtons = ({ legend = '', name, radioBtns }) => {
  return (
    <fieldset className={namespace}>
      {legend && <legend>{legend}</legend>}
      {radioBtns.map(({ id, value }, index) => {
        return (
          <>
            <input
              type='radio'
              name={name}
              value={value}
              id={id}
              checked={index === 0}
              onClick={() => console.log('first')}
            />
            <label key={`level-${value}`}>{value}</label>
          </>
        );
      })}
    </fieldset>
  );
};
