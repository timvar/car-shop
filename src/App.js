import React, { Component } from 'react';
import './App.css';
import CarTable from './components/CarTable';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {cars: []};
  }

  getCars = () => {
    fetch('https://carstockrest.herokuapp.com/cars')
    .then(response => response.json())
    .then(responseData => {
      this.setState({cars: responseData._embedded.cars});
      console.log(responseData._embedded.cars);
    })
    .catch(err => console.log('Error msg: ', err));
  }

  componentDidMount () {
    this.getCars();
  }
  

  render() {
    return (
      <div className="container">
        <CarTable cars={this.state.cars} />
        
      </div>
    );
  }
}

export default App;
