import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
  
    this.state = {
      monster : [
        {
          name : 'Franky',
          id : 'asd1'
        },
        {
          name : 'Drako',
          id : 'asd2'
        },
        {
          name : 'Zomb',
          id : 'asd3'
        }
        
      ]
      
    };
  }

  render() {
    return (
      <div className="App">
      {
        this.state.monster.map(monster => <h1 id = { monster.id }> {monster.name} </h1>)
      }     
      </div>
    )
  }
}

export default App;
