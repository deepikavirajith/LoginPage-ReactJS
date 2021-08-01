import React from 'react';
import {Carousel} from 'react-bootstrap';

function Slider(){
    return(  //slider to display the images 
        <div className="col-12 offset-1 col-sm-8">
            <Carousel id="carousel">
                <Carousel.Item>
                    <img className="d-block w-100"
                     src="./assests/images/Ford.jpg" width="400px" height="400px" alt="Ford">
                    </img>
                    <Carousel.Caption>
                        <h5>Ford</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100"
                     src="./assests/images/Limousine.jpg" width="250px" height="400px" alt="Ford">
                    </img>
                    <Carousel.Caption>
                        <h5>Limousine</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100 "
                     src="./assests/images/Volkswagen.jpg" width="250px" height="400px" alt="Ford">
                    </img>
                    <Carousel.Caption>
                        <h5>Volkswagen</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100"
                     src="./assests/images/Mercedes-Benz.jpg" width="250px" height="400px" alt="Ford">
                    </img>
                    <Carousel.Caption>
                        <h5>Mercedes-Benz</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100"
                     src="./assests/images/Roadster.jpg" width="250px" height="400px" alt="Ford">
                    </img>
                    <Carousel.Caption>
                        <h5>Roadster</h5>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100"
                     src="./assests/images/Van.jpg" width="250px" height="400px" alt="Ford">
                    </img>
                    <Carousel.Caption>
                        <h5>Van</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
        
    )

}

export default Slider;