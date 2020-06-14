import React, {Component} from 'react';

import QuestionsForm from '../../components/Questions/QuestionsForm';
import Sentence from '../../components/Sentence/Sentence';

import './SentenceMaker.css';
class SentenceMaker extends Component {
  state = {
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
    disabled: false,
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({isSubmitted: true, disabled: !this.state.disabled});
  };

  render() {
    return (
      <div className='SentenceMaker'>
        {!this.state.isSubmitted ? (
          <QuestionsForm
            submit={this.handleSubmit}
            questions={this.state.questions}
            change={this.handleChange}
            disabled={this.state.disabled}
          />
        ) : (
          <Sentence
            sentence={
              this.state.Who +
              ' ' +
              this.state.What +
              ' ' +
              this.state.Where +
              ' ' +
              this.state.When
            }
          />
        )}
      </div>
    );
  }
}

export default SentenceMaker;
