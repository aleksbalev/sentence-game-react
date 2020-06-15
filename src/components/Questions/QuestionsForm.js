import React from 'react';

import Questions from './Questions';

const questionsForm = (props) => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <Questions questions={props.questions} change={props.change} />
        <button className='SentenceMakerBtn' type='submit' value='Submit'>
          Ready?
        </button>
      </form>
    </div>
  );
};

export default questionsForm;
