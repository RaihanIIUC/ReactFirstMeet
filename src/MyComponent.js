import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    age: 24,
    name: "Raihan",
    profession: "Laravel Developer",
  };

  nameChange = () => {
    this.setState({ name: "Ishan"});
  }
  ageChange = () => {
     this.setState({ age : 27})
  }
  ProfessionChange = () => {
    this.setState({ profession : "Programmer"})
  }

  render() {
    return (
      <div>
        <h1>It's all about {this.state.name} </h1>
        <p> I am {this.state.name}</p>
        <p> I am {this.state.age} old</p>
        <p> I am {this.state.profession} </p>

        <button onClick={this.nameChange}>Update Name </button>
        <button onClick={this.ageChange}>Update Age </button>
        <button onClick={this.ProfessionChange}>Update profession </button>
      </div>
    );
  }
};

export default MyComponent;