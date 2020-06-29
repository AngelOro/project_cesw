import React, { Component } from "react";
import "../styles/VehicleContent.css";
import axios from "axios";

class userContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          listUser: [],
          visible: false,
        };
      }

     
    
      componentDidMount() {
        axios.get('http://192.168.1.2:3001/user/listUser')
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
        .catch(error => {
            alert("Error" + error)
        });
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
            <tr className="tr-table">
              <td></td>
              <td></td>
            </tr>
            {this.loadFillData()}
          </tbody>
        </table>
      </div>
    );
  }

  loadFillData() {
    return this.state.listUser.map((data) => {
      return (
        <tr className="tr-table">
          <td>{data.usuario}</td>
          <td>{data.clave}</td>
        </tr>
      );
    });
  }
}

export default userContent;
