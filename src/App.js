import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/MenuComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

import {Navbar, NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {DISHES} from './shared/dishes';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            dishes : DISHES
        };
    }
  render() {
    return (
      <div >
        <Header/>
        <Menu dishes = {this.state.dishes} />
        <Footer />
      </div>
    );
  }
}

export default App;
