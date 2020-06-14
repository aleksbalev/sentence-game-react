import React, {Component} from 'react';

import SentenceMaker from './containers/SentenceMaker/SentenceMaker';
import Preview from './components/Preview/Preview';

import './App.css';
class App extends Component {
  state = {
    displayed: 'Preview',
  };

  renderComponent = () => {
    switch (this.state.displayed) {
      case 'Preview':
        return <Preview click={this.handleClickOnPreview} />;
      case 'SentenceMaker':
        return <SentenceMaker />;
      default:
        return <Preview />;
    }
  };

  handleClickOnPreview = () => {
    this.setState({
      displayed: 'SentenceMaker',
    });
  };

  handleClickOnSentMaker = () => {};

  render() {
    return <div className='App'>{this.renderComponent()}</div>;
  }
}

export default App;
