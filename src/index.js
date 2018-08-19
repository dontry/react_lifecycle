import React from "react";
import ReactDOM from "react-dom";
import Container from "./container";

import "./styles.css";

class App extends React.Component {
  state = {
    info: {
      name: "",
      sex: ""
    }
  };
  _handleChange = field => {
    this.setState({ info: { ...this.state.info, ...field } });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <p>{JSON.stringify(this.state.info)}</p>
        <Container info={this.state.info} onChange={this._handleChange} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
