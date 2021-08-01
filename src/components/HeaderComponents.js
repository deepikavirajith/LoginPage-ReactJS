import React, { Component } from 'react';
import {Nav, NavItem, Navbar, Jumbotron, NavbarBrand, NavLink} from 'reactstrap';



class Header extends Component{


    render(){
        return(
          <Jumbotron  style={{ backgroundImage: `url(${'../assests/images/back.jpg'})` }}>
              <div className="container">
                  <div className="row row-header">
                    <div className="col-12 col-sm-2">
                      <img src="./assests/images/logo.png" width="150px" height="100px"></img>
                    </div>
                      <div className="col-12 col-sm-6">
                          <h1>CarOnSale</h1>
                          <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                      </div>
                  </div>
              </div>
          </Jumbotron>


        )
    }
}
export default Header;

