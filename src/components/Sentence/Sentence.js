import React from 'react';

import './Sentence.css';

const sentence = (props) => {
  return (
    <div className='Sentence'>
      <p>{props.sentence}</p>
    </div>
  );
};

export default sentence;
