export const handleQuestionsSubmit = (data) => ({
  type: 'HANDLE_QUESTIONS_SUBMIT',
  data,
});

export const handleQuestionsChange = ({name, value}) => ({
  type: 'HANDLE_QUESTIONS_CHANGE',
  name,
  value,
});

export const selectDisplayed = (displayed) => {
  return {
    type: 'SELECT_DISPLAYED',
    displayed,
  };
};

export const resetApp = () => ({
  type: 'RESET_APP',
});
