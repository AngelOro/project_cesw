import React, { Component } from "react";
import "../styles/VehicleContent.css";
import { link, Link } from "react-router-dom";
import axios from "axios";

class userContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          data: [],
          visible: false,
        };
      }

     
      _fetchData(){
        axios.get('http://192.168.0.20:3001/user/listUser')
        .then((res) => {
          const userData = res.data;
          console.log(userData);
          this.setState({
            data: userData,
          });
        })
        .catch((error) => {
          this.setState({
            error: isNaN,
          });
        });
      }
      componentDidMount() {
        this._fetchData();
      }

  render() {
    return (
      <div>
        <table className="table table-striped" id="tableContent">
          <thead className="head-table">
            <tr>
              <th scope="col">usuario</th>
              <th scope="col">clave</th>
            </tr>
          </thead>
          <tbody className="body-table">
          {this.state.data.map((user) => (
              <tr className="tr-table">
                <td>{user.usuario}</td>
                <td>{user.clave}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

 
}

export default userContent;
