import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'

class ContactUs extends Component {
    
    render() {
        return (
            <div>
                <h1>Contact Us</h1>
                <h5>Email:</h5>
                <p>
                    <a href="mailto:jequel07@gmail.com">jequel07@gmail.com</a>
                </p>
                <h5>Github:</h5>
                <p>
                    <a href="https://github.com/Xxyumi-hub">github.com/Xxyumi-hub</a> 
                </p>
                <h5>Phone number:</h5>
                <p>
                    <a href="tel:678-949-0285">678-949-0285</a>
                </p>
                <p>Check out what we're all about, at the about page!</p>
                <Button variant="contained" color="primary">
                    <Link to="/aboutus" style={{color:'white'}}>Go to About page</Link>
                </Button>
            </div>
        )
    }
}

export default ContactUs;