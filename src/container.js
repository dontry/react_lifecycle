import React, { Component } from "react";
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

export default class Container extends Component {
  state = {
    fields: initialize.call(this, this.props.info)
  };

  componentWillMount() {
    console.log("Container component will mount");
  }

  componentDidMount() {
    console.log("Container component did mount");
  }

  componentWillReceiveProps(prevProps, prevState) {
    console.log("Container component will receive props");
    console.log("prevProps:" + JSON.stringify(prevProps));
    console.log("prevState:" + JSON.stringify(prevState));
  }

  componentWillUpdate(prevProps, prevState) {
    console.log("Container component will update");
    console.log("prevProps:" + JSON.stringify(prevProps));
    console.log("prevState:" + JSON.stringify(prevState));
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log("Should component update");
    console.log("prevProps:" + JSON.stringify(prevProps));
    console.log("prevState:" + JSON.stringify(prevState));
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
    console.log("prevProps:" + JSON.stringify(prevProps));
    console.log("prevState:" + JSON.stringify(prevState));
  }

  _handleInputChangeWithKey(key) {
    const that = this;
    return function(event) {
      const value = event.target.value;
      that.setState(
        {
          fields: {
            ...that.state.fields,
            [key]: {
              ...that.state.fields[key],
              value
            }
          }
        },
        () => {
          this.props.onChange({ [key]: value });
        }
      );
    };
  }

  render() {
    const { fields } = this.state;
    return (
      <div>
        {Object.entries(fields).map(([key, field]) => {
          const { component, ...rest } = field;
          return React.createElement(component, { ...rest, key });
        })}
      </div>
    );
  }
}
