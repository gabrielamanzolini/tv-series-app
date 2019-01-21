import React from 'react';

const Intro = props => ( //first component has aways the first letter capitalized
    <p className="App-intro">
      {props.message}
    </p>
  )

  export default Intro;