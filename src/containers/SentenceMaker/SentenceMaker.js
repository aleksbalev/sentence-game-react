import React, {Component} from 'react';
import {connect} from 'react-redux';

import QuestionsForm from '../../components/Questions/QuestionsForm';
import Sentence from '../../components/Sentence/Sentence';
import {
  handleQuestionsSubmit,
  handleQuestionsChange,
  resetApp,
} from '../../actions/index';

import './SentenceMaker.css';
class SentenceMaker extends Component {
  handleChange = (evt) => {
    this.props.onQuestionsChange(evt.target.name, evt.target.value);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.submitAnswers({
      isSubmitted: !this.props.isSubmitted,
      disabled: !this.props.disabled,
    });
  };

  pageRefresh = () => {
    this.props.resetApp();
  };

  render() {
    const state = this.props.sentences;
    const {Who, What, Where, When} = state.answers;

    return (
      <div className='SentenceMaker'>
        {!state.isSubmitted ? (
          <QuestionsForm
            submit={this.handleSubmit}
            questions={state.questions}
            change={this.handleChange}
          />
        ) : (
          <Sentence
            sentence={Who + ' ' + What + ' ' + Where + ' ' + When}
            refresh={this.pageRefresh}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sentences: state.sentences,
});
const mapDispatchToProps = (dispatch) => ({
  submitAnswers: (data) =>
    dispatch(
      handleQuestionsSubmit({
        isSubmitted: data.isSubmitted,
        disabled: data.disabled,
      })
    ),
  onQuestionsChange: (name, value) =>
    dispatch(
      handleQuestionsChange({
        name,
        value,
      })
    ),

  resetApp: () => dispatch(resetApp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SentenceMaker);
