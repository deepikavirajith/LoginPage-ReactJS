import React, {Component} from 'react';
import {Label, Button, Row} from 'reactstrap';
import {baseUrl } from './baseUrl';
import {LocalForm, Control, Errors } from 'react-redux-form';
import {withRouter} from 'react-router-dom';

const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const required = (val) => val && val.length;

class HomeComponent extends Component {

    constructor(props){
        super(props);
        this.state={
           userdata : [],
            username: "",
            password: "",
            mes:""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.loginDetails = this.loginDetails.bind(this);
    }
  
    

    componentDidMount(){
       fetch(baseUrl + 'data', { //Get data from database db.json
           method: 'GET',
           headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => {
        this.setState({userdata: response})
        console.log(response);
    })
    .catch(error =>  { 
        console.log('post comments', error.message); 
        alert('Your comment could not be posted\nError: '+error.message);
     });
     
    }

      handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
        event.preventDefault();
      } 
    


    loginDetails(){ //validate the login details
           if((this.state.username == this.state.userdata[1].userId && this.state.password == this.state.userdata[1].password) || 
           (this.state.username == this.state.userdata[0].userId && this.state.password == this.state.userdata[0].password))
           {
            this.props.history.push('/menu');
              
           }  
            else{
                alert('Authentisierung für Benutzer \"unknown\" fehlgeschlagen.');
                this.setState({
                    username:'',
                    password:''      
            })
                
           }
        }
    

    render(){
    
        return( //form displaying username password interface
            <div className="container" id="models">
                <div className="row col-sm-8 row-content"> 
                <LocalForm>
                    <Row className="form-group col-sm-8 m-2">
                        <Label htmlFor="username"></Label>
                        <Control.text model=".username" id="username" name="username" placeholder="User Name"
                        value={this.state.username} onChange={this.handleInputChange}
                        validators={{required, validEmail}}></Control.text>
                        <Errors
                            className="text-danger"
                            model=".username"
                            show="touched"
                            messages={{
                                required: 'Required',
                                validEmail: 'Invalid Email Address'
                                        }} />
                    </Row>
                    <Row className="form-group col-sm-8 m-2">
                        <Label htmlFor="password"></Label>
                        <Control.password model=".password" id="password" name="password" placeholder="Password"
                         value={this.state.password} onChange={this.handleInputChange}></Control.password>
                      </Row>
                    <Row className="form-group col-sm-4 offset-2">
                       <Button type="submit" color="primary" onClick={this.loginDetails}>Login</Button>
                    </Row>
                </LocalForm>
                </div>
                
            </div>
           
        )
        
    }
    
}
export default withRouter(HomeComponent);