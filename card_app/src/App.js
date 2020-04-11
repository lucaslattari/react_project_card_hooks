//App.js
import React, {Component} from 'react';
import './App.css';
import Channel from './Channel'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Channel
          newName = "Loop Infinito"
          newAvatar = "avatarLOOP.jpg"
          newDescription = "Tecnologia"
        />
      </div>
    );
  }
}

export default App;
