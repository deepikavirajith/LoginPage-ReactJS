import React, { Component } from 'react';
import { Card, CardImg, Form, FormGroup, Button, CardBody,Label, Input,  Modal, ModalHeader, 
    ModalBody, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {CARS} from '../shared/cars';  
import Slider from '../components/SliderComponents';
import { Link } from 'react-router-dom';


class Menu extends Component {

    constructor(props) {
        super(props);
        let fixDate = (new Date()).setHours(15,0,0); // for 3:00:00 pm
        let currDate = new Date();
        this.state = {
            cars: CARS,
            selectedDish: null,
            fixDate, diff: fixDate-currDate,
            isModalOpen: false
        }

         this.toggleModal = this.toggleModal.bind(this);
    }

    tick() {
        this.setState((prevState) => ({
            diff: prevState.fixDate - (new Date()).getTime(),
        }));
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render() {
        
        const { diff } = this.state; //time left for auction
        console.log(diff);
        const hours = Math.floor(diff/(60*60*1000));
        console.log(hours);
        const mins = Math.floor((diff-(hours*60*60*1000))/(60*1000));
        console.log(mins);
        const secs = Math.floor((diff-(hours*60*60*1000)-(mins*60*1000))/1000);
        console.log(secs);

        const menu = this.state.cars.map((car) => {
            return (
              <div  className="col-12 offset-2 col-sm-5 m-1">
                   <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Enter an amount</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="bidAmount">Bid a Amount</Label>
                                <Input type="number" id="bidAmount" name="bidAmount" placeholder="Bid Amount"></Input>
                            </FormGroup>
                            <FormGroup>
                               <Button type="submit" name="submit">Submit</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
       
                <Card key={car.id}>
                  <CardImg width="100%" src={car.image} alt={car.name} />
                  <CardBody>
                      <h5>{car.name}</h5>
                      <h6>Registration: {car.registration} </h6>
                      <h6>Distance: {car.distance} </h6>
                      <h6>Fuel: {car.fuel} </h6>
                      <h6>Higest Bid: {car.higest} </h6>
                      <h5>TimeLeft: {hours}hr:{mins}mins:{secs}secs</h5>
                  <Button type="submit" className="ml-auto" color="primary" onClick={this.toggleModal}>Bid</Button>
                    </CardBody>
                  </Card>
            </div>
            );
        });

        return (
            <div className="container" id="models">
                 <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Logout</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Auction</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Avaliable Models</h3>
                        <hr />
                    </div>   
                </div>
                <div className="row m-2">
                <Slider></Slider>
            </div>
                <div className="row">
                    {menu}
                </div>
           
            </div>
        );
    }
}

export default Menu;
 