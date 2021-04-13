import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      input: "Search",
    };
  }
  onToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  onChange = (input) => {
    this.setState({ input });
  };

  render() {
    return (
      <div>
        <nav className="bg-black">
          <a href="#a" className=" text-white p-5 ">
            Logo
          </a>
          <a href="#a" className="text-white p-8">
            Login
          </a>
          <a href="#a" className="text-white p-5">
            Register
          </a>
          <button onClick={this.onToggle} className="text-white p-6">
            Search
          </button>
          <div>
            <div isOpen={this.state.toggle} className="max-w-md">
              <div>
                <form action="">
                  <input type="text" placeholder="Search" className="w-80" />
                  <button className="text-black">Search</button>
                  <button onClick={this.onToggle} className="p-1.5">
                    X
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
