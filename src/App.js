import React from 'react';
import FaceContainer from './containers/FaceContainer';

class App extends React.Component {
  componentDidMount() {
    // TODO: Handle screen resizing
  }

  render() {
    return (
      <div className="App">
        <FaceContainer/>
      </div>
    );
  }  
}

export default App;
