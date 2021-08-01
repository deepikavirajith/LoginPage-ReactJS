import React from 'react';

function Footer() {
    return(
    <div className="footer" style={{ backgroundImage: `url(${'../assests/images/back.jpg'})` }}>
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
                    Castle Tech GmbH<br />
                    c/o The Drivery GmbH<br />
                    Mariendorfer Damm 1,<br />
                    12099 Berlin<br />
		              <i className="fa fa-phone fa-lg"></i>: +49 30 311 96 400<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:info@caronsale.de">
                      info@caronsale.de</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;