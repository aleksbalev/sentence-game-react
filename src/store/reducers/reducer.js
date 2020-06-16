import * as actionTypes from '../actions';

const initialState = {
  displayed: actionTypes.PREVIEW,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PREVIEW:
      return <Preview click={this.handleClick} />;
    case actionTypes.SENTENCEMAKER:
      return <SentenceMaker />;
  }
  return state;
};

export default reducer;
