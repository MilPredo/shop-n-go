import React, { Component } from "react";
import InputForm from './InputForm';
import SearchBar from './SearchBar';
import SignUp from './SignUp';
import Login from './Login';
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      login:false,
      register:false

    };
  }
  onToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  onRegister = () => {
    this.setState({ register: !this.state.register });
  };
  onLogin=()=>{
    this.setState({ login: !this.state.login });
  };
  render() {
    return (
     <nav className="relative">
        <button onClick={this.onToggle} >Search</button>
        {this.state.toggle ? <SearchBar ref={(ip) => this.target = ip} />:null}
        <button onClick={this.onRegister}>Register</button>
        {this.state.register?<SignUp />:null}
        <button onClick={this.onLogin}>Login</button>
     </nav>
    );
  }
}

export default NavBar;
