import React, { Component } from 'react';
import { BrowserRouter, Swith, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import MainLogin from '../components/MainLogin';
import Main from '../pages/Main.jsx';
import Shipping from '../pages/Shipping';
import Report from '../pages/Report';
import Conduct from '../pages/Conduct';
import Vehicle from '../pages/Vehicle';
import RegisterVehicle from '../pages/RegisterVehicle'
import Axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: {}

    }
  }

  _fetchData() {
    Axios.get('https://api-sotransiv-8xli76wpt.now.sh/vehicles')
      .then(res => {
        const vehiclesData = res.data;
        console.log(vehiclesData);
        this.setState(
          {
            loading: false,
            data: vehiclesData,
          });
      })
      .catch((error) => {
        this.setState(
          {
            loading: false,
            error: isNaN

          }
        )
      });
  }

  componentDidMount() {
    this._fetchData();

  }


  render() {

    if (this.state.VehicleContent) {
      return (
        <div className='App'>
          {/* <Loading /> */}
        </div>
      );
    }

    if (this.state.error !== null) {
      return <h1>Error</h1>
    }

    return (
     
        <BrowserRouter>
          <Route exact path="/" component={MainLogin} />
          <Route path="/Main" component={Main} />
          <Route path="/Vehicle" component={Vehicle} />
          <Route path="/Shipping" component={Shipping} />
          <Route path="/Report" component={Report} />
          <Route path="/Conduct" component={Conduct} />
          <Route path="/RegisterVehicle" component={RegisterVehicle} />

        </BrowserRouter>

      

    );
  }
}

export default App;
