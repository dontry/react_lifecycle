import React, { Component, PureComponent } from "react";
import Input from "./Input";
import Select from "./Select";

function initialize(info) {
  return {
    name: {
      value: info.name,
      component: Input,
      onChange: this._handleInputChangeWithKey("name").bind(this)
    },
    sex: {
      value: info.sex,
      component: Select,
      options: ["Male", "Female"],
      onChange: this._handleInputChangeWithKey("sex").bind(this)
    }
  };
}

export default class Container extends PureComponent {
  static initialState;

  componentWillMount() {
    console.log("Container component will mount");
  }

  componentDidMount() {
    console.log("Container component did mount");
    this.initialState = this.props.info;
  }

  componentWillReceiveProps(prevProps, prevState) {
    console.group("Container component will receive props");
    console.log("prevProps:" + JSON.stringify(prevProps));
    console.log("prevState:" + JSON.stringify(prevState));
    console.groupEnd();
  }

  componentWillUpdate(prevProps, prevState) {
    console.group("Container component will update");
    console.log("prevProps:" + JSON.stringify(prevProps));
    console.log("prevState:" + JSON.stringify(prevState));
    console.groupEnd();
  }

  // shouldComponentUpdate(prevProps, prevState) {
  //   console.group("Should component update");
  //   console.log("prevProps:" + JSON.stringify(prevProps));
  //   console.log("prevState:" + JSON.stringify(prevState));
  //   console.groupEnd();
  //   return true;
  // }

  componentDidUpdate(prevProps, prevState) {
    console.group("Component did update");
    console.log("prevProps:" + JSON.stringify(prevProps));
    console.log("prevState:" + JSON.stringify(prevState));
    console.groupEnd();
  }

  _handleInputChangeWithKey(key) {
    const that = this;
    return function(event) {
      const value = event.target.value;

      this.props.onChange({ [key]: value });
    };
  }

  _reset = () => {
    this.setState({ fields: initialize.call(this, this.initialState) });
    this.props.onChange(this.initialState);
  };

  render() {
    console.group("Render");
    console.log("State:", this.state);
    console.groupEnd();
    const fields = initialize.call(this, this.props.info);
    return (
      <div>
        {Object.entries(fields).map(([key, field]) => {
          const { component, ...rest } = field;
          return React.createElement(component, { ...rest, key });
        })}
        <br />
        <button onClick={this._reset}>reset</button>
      </div>
    );
  }
}
