import React, { Component, ReactDOM} from 'react';
import HomeComponent from "./components/homeComponents";
import Header from './components/HeaderComponents';
import { Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import './App.css';
import Footer from './components/FooterComponents';
import Menu from './components/MenuComponents';



class App extends Component {
 
  render(){
    return (
      <div>
      <Header />
      <Router>
      <Route path="/home" ><HomeComponent /></Route>
      <Route exact path="/menu"><Menu></Menu></Route>
      <Redirect exact from="/" to="/home" />
      </Router>
      <Footer></Footer>
      </div>
    
        
    );
}
}


export default App;
