import { Component } from 'react';
import React from 'react';
import './index.css';

class Field extends Component {
  state = {
    value: this.props.value
  };

  onChange = evt => {
    const name = this.props.name;
    const value = evt.target.value;

    this.setState({ value });
    this.props.onChange({ name, value });
  };

  render() {
    return (
      <div className="field">
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Field;
