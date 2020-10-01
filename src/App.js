import React, { Component } from "react";
import "./index.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      peso: 0,
      altura: 0
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => this._getImc());

    // this._getImc(this.state);
  };

  _getImc = () => {
    if(this.state.altura == 0) return;
    const imc = Math.round(this.state.peso / (this.state.altura * this.state.altura));
    this.setState({ imc: imc });
  };

  render() {
    return (
      <div className="App">
        <h1>IMC Calc</h1>
        <div>
          <div>
            <label>Peso: </label>
            <input
              autoFocus
              id="peso"
              name="peso"
              onChange={(event) => this._handleChange(event)}
              value={this.state.peso}
            />
          </div>
          <div>
            <label>Altura: </label>
            <input
              id="altura"
              name="altura"
              onChange={(event) => this._handleChange(event)}
              value={this.state.altura}
            />
          </div>
        </div>
        <div id="imc">
          <label>Imc: </label>
          <input id="imc" value={this.state.imc} />
        </div>
      </div>
    );
  }
}
