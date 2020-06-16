import React, {Component} from 'react';
import {connect} from 'react-redux';

import {selectDisplayed} from '../actions/index';
import SentenceMaker from '../containers/SentenceMaker/SentenceMaker';
import Preview from './Preview/Preview';

class InitialView extends Component {
  renderComponent = () => {
    switch (this.props.displayed) {
      case 'Preview':
        return <Preview click={this.handleClick} />;
      case 'SentenceMaker':
        return <SentenceMaker />;
      default:
        return <Preview />;
    }
  };
  handleClick = () => {
    this.props.selectDisplayed('SentenceMaker');
  };
  render() {
    return <div className='App'>{this.renderComponent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    displayed: state.sentences.displayed,
  };
};
const mapDispatchToProps = (dispatch) => ({
  selectDisplayed: (displayed) => dispatch(selectDisplayed(displayed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InitialView);
