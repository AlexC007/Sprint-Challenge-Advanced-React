import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import Nav from "./hooks/nav"
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      player1:[],
      player2:[],
      player3:[],
   
    }
  }

  componentDidMount=()=>{
axios.get('http://localhost:5000/api/players')
        .then(player => {
         // console.log('players',player.data[0]);
          this.setState({ player1: player.data[0] })
        })
        .then(
          axios.get("http://localhost:5000/api/players")
          .then(player => {
         // console.log('players',player.data[1]);
          this.setState({ player2: player.data[1] })
        })
        )
        .then(
          axios.get("http://localhost:5000/api/players")
          .then(player => {
          //console.log('players',player.data[2]);
          this.setState({ player3: player.data[2] })
        })
        )
        .catch(err => console.log(err))
    
}


 render(){
  return (
    <div className= 'app'>
      <Nav/>
    <div className="players">
      <div className= 'player'>
      <h1>{this.state.player1.name}</h1>
      <p>{this.state.player1.country}</p>
      </div>

      <div className= 'player'>
      <h1>{this.state.player2.name}</h1>
      <p>{this.state.player2.country}</p>
      </div>

      <div className= 'player'>
      <h1>{this.state.player3.name}</h1>
      <p>{this.state.player3.country}</p>
      </div>
    </div>
  </div>
  );
 }
  }

export default App;