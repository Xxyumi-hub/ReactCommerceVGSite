import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button'

class AboutUs extends Component {

    
    render() { /* loading this in to teh index file adn then passing each key to each component*/
        return (
            <div>
                <h1>About Us</h1>
                <p>This is a fake e-commerce game store selling only my favorite games on my favorite current systems.</p>
                <p>Check out how to contact us/me:</p>
                <Button variant="contained" color="primary">
                    <Link to="/contactus" style={{color:'white'}}>Go to Contact page</Link>
                </Button>
            </div>
        )
    }
}

export default AboutUs;