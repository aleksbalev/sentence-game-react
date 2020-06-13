import React from 'react';

import './Question.css';

const question = (props) => {
  return (
    <div className='Question'>
      <label htmlFor={props.questionName}>{props.questionName}?</label>
      <input
        type='text'
        name={props.questionName}
        onChange={props.change}
        disabled={props.disabled ? 'disabled' : ''}
      />
    </div>
  );
};

export default question;
