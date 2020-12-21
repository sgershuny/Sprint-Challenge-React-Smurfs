import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],

    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  
  componentDidMount(){
    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => console.log("Error GET Smurfs!!"))
  }

  deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    
    window.location.reload(false); 
  }


  render() {
    return (
      <div className="App">
        <NavLink to = "/"> Home </NavLink>
        <NavLink to = "/smurf-form"> Smurf Form</NavLink>
        <Route exact path = "/" render ={(props) =>
          <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf = {this.deleteSmurf}/>}
        />
        <Route path = "/smurf-form" render = {(props) =>
          <SmurfForm {...props} id = {this.state.smurfs.length}/>}
        />
        

      </div>
    );
  }
}

export default App;
