import React from 'react';

import './Validation.css';

const validation = (props) => {
  return (
    <h2 className='ValidationText'>
      {props.sentence === "Let's play a game" ? 'YOU WIN!' : 'YOU LOOSE!'}
    </h2>
  );
};

export default validation;
