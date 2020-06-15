import React from 'react';

import Question from './Question/Question';

const questions = (props) =>
  props.questions.map((question) => {
    return (
      <Question
        questionName={question.questionName}
        change={(evt) => props.change(evt)}
        key={question.id}
      />
    );
  });

export default questions;
