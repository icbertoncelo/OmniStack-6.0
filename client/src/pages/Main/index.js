import React, { Component } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div id="main-container">
          <form action="">
            <img src={logo} alt="" />
            <input placeholder="Create a Box" />
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    );
  }
}
