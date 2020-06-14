import React from 'react';

import Validation from '../Validation/Validation';

import './Sentence.css';

const sentence = (props) => {
  return (
    <div className='SentenceText'>
      <Validation sentence={props.sentence} />
      <p>{props.sentence}</p>
    </div>
  );
};

export default sentence;
