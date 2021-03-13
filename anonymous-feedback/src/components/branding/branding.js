import React, { Component } from 'react';

const divStyle = {
  margin : "20px",
  fontSize: "0.8rem",
  justifyContent: "space-evenly"
};

const imgStyle = {
  maxWidth: "200px",
  margin: "20px"
};

class Branding extends Component {

  render() {
    return (
      <div style={divStyle}>
        <img style={imgStyle} src={"/resources/brand/ifm.png"} alt="ifm" />
        <img style={imgStyle} src={"/resources/brand/cam-engineering.png"} alt="cam-engineering" />
        <img style={imgStyle} src={"/resources/brand/pitch-in.jpg"} alt="pitch-in" />
      </div>
    );
  }
}

export default Branding;
