import React from 'react';

import './Preview.css';

const Preview = (props) => (
  <div>
    <h1>Welcome to my sentence game!</h1>
    <p>Rules are simple.</p>
    <p>You win if you guess only one right sentence.</p>
    <button className='PreviewBtn' onClick={props.value}>
      Let's play a game!
    </button>
  </div>
);

export default Preview;
