import React, { Component } from "react";
import '../styles/VehicleContent.css';
import { link, Link } from 'react-router-dom';


class VehicleContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: {}

    }
  }
  render() {
    return (
      <div class="container" id="container-body">
        
      </div>
    );
  }
}

export default VehicleContent;