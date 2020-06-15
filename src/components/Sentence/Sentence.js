import React from 'react';

import Validation from '../Validation/Validation';

import './Sentence.css';

const sentence = (props) => {
  return (
    <div className='SentenceText'>
      <Validation sentence={props.sentence} />
      <p>{props.sentence}</p>
      {props.sentence !== "Let's play a game" ? (
        <button className='SentenceBtn' type='button' onClick={props.refresh}>
          Try again?
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default sentence;
