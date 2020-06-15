import React from 'react';

import './Question.css';

const question = (props) => {
  return (
    <div className='Question'>
      <label className='QuestionLabel' htmlFor={props.questionName}>
        {props.questionName}?
      </label>
      <input
        className='QuestionInput'
        type='text'
        name={props.questionName}
        onChange={props.change}
        required
      />
    </div>
  );
};

export default question;
