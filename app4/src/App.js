import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then((res, i) => {
      console.log(res.data[4])
      this.setState({
        cars: res[i]
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {this.state.cars}
      </div>
    );
  }
}

export default App;
