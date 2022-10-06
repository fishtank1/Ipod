import React, { Component } from 'react';
import IpodBody from './IpodBody';
import IpodWheel from './IpodWheel';

class App extends Component {
  back = (event) => {
    console.log('back clicked');
  }
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