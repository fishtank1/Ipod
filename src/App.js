import React, { Component } from 'react';
import IpodBody from './IpodBody';
import IpodWheel from './IpodWheel';

class App extends Component {
  render() {
    return(
      <div>
        <IpodBody />
        <IpodWheel />
      </div>
    )
  }
}

export default App;