import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="wrapper">
       <Calculator />
      </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
