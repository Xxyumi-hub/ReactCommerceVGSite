import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class BaseLayout extends Component {
    render(){
        return (
            <div>
                <header style={{backgroundColor: "black"}}>
                    <nav>
                        &nbsp;
                        &nbsp;
                        <NavLink to="/" activeClassName="selected" activeStyle={{color:"blue"}}>Home</NavLink>
                        &nbsp;
                        &nbsp;
                        <NavLink to="/aboutus" activeClassName="selected">About Us</NavLink>
                        &nbsp;
                        &nbsp;
                        <NavLink to="/contactus" activeClassName="selected">Contact Us</NavLink>
                        &nbsp;
                        &nbsp;
                        <NavLink to="/pcgames" activeClassName="selected">PC Games</NavLink>
                        &nbsp;
                        &nbsp;
                        <NavLink to="/pspgames" activeClassName="selected">PSP Games</NavLink>
                        &nbsp;
                        &nbsp;
                        <NavLink to="/ps4games" activeClassName="selected">PS4 Games</NavLink>
                        &nbsp;
                        &nbsp;
                        <NavLink to="/switchgames" activeClassName="selected">Switch Games</NavLink>
                    </nav>
                </header>
                {this.props.children}
                <footer>
                
                </footer>
            </div>
        )
    }

}

export default BaseLayout;