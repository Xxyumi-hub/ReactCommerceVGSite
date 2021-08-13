import React, { Component } from 'react';
import jsonData from '../data/jsonData.json';

class SwitchGames extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            id: "",
            picture: "",
            title: "",
            description: "",
            price: ""
          }

    }

    componentDidMount() {
        this.setState({data: jsonData.switchGames})
    }
    
    render() {
        return (
          <div>
          <h1>Switch Games</h1>
          {
            this.state.data.map((gameObject, i)=>
            <div key={i}>
              <h3>{gameObject.title}</h3>
              <h5>{gameObject.price}</h5>
              <h5>{gameObject.description}</h5>
              <img src={gameObject.picture} alt={gameObject.description} width="200em"/>
            </div>
            )
          }
        </div>
        )
    }
}

export default SwitchGames;