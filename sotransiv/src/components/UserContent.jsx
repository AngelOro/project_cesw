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

     

      componentDidMount() {
        axios.get('http://192.168.1.73:3001/user/listUser')
        .then(res => {
            if(res.data.success){
                const data = res.data.data
                console.log(data);
                this.setState({listUser: data})
            }
            else{
                alert("Sorry")
            }
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
