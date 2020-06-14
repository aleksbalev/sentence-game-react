import React from 'react';

import './Sentence.css';

const sentence = (props) => {
  return (
    <div className='SentenceText'>
      <p>{props.sentence}</p>
    </div>
  );
};

export default sentence;
