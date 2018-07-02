import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/MenuFunctionComponent'; 
import Header from './components/HeaderComponent';
import {Navbar, NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {DISHES} from './shared/dishes';

class MainComponent extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            dishes : DISHES,
            selectedDish : null
        };
    }
    onDishSelect(dishId){
        this.setState({selectedDish : dishId});
    }
  render() {
    return (
      <div >
        <Header/>
         
        <Menu dishes = {this.state.dishes} 
        onClick = { (dishId) => this.onDishSelect(dish) }/>
      </div>
    );
  }
}

export default App;
