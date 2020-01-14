import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Logout extends Component {
    state = {
      navigate: false
    };
      logoutBtn = () => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("state");
      this.setState({navigate: true});
    };

    render(){
      const {navigate} = this.state;
      if(navigate) {
        return <Redirect to='/' push={true}/>;
      }
      return <button className="logout" onClick={this.logoutBtn}>Logout</button>
    }
  }

export default Logout;
