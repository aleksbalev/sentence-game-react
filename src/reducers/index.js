import {combineReducers} from 'redux';

const initState = {
  questions: [
    {
      id: 'who1',
      questionName: 'Who',
      who: '',
    },
    {
      id: 'what1',
      questionName: 'What',
      what: '',
    },
    {
      id: 'when1',
      questionName: 'When',
      when: '',
    },
    {
      id: 'where1',
      questionName: 'Where',
      where: '',
    },
  ],
  isSubmitted: false,
  isDisabled: false,
  answers: {},
  displayed: 'Preview',
};

const sentences = (state = initState, action) => {
  switch (action.type) {
    case 'HANDLE_QUESTIONS_SUBMIT': {
      return {
        ...state,
        ...action.data,
      };
    }

    case 'HANDLE_QUESTIONS_CHANGE': {
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.name]: action.value,
        },
      };
    }

    case 'RESET_APP': {
      return {
        ...state,
        ...initState,
      };
    }

    case 'SELECT_DISPLAYED': {
      return {
        ...state,
        displayed: action.displayed,
      };
    }

    default:
      return state;
  }
};

export default combineReducers({
  sentences,
});
