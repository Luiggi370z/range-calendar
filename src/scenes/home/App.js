import { Component } from "react";
import React from 'react';
import moment from 'moment';
import logo from "../../images/logo.svg";
import "./App.css";

import InputFields from './inputFields';
import Calendar from './calendar';

class App extends Component {
  state = {
    fields: {
      startDate: "",
      totalDays: "",
      country: ""
    },
    startDate: null,
    endDate: null,
  };

  validate = () => {
    const { fields } = this.state;
    return fields.startDate && fields.totalDays && fields.country;
  };

  onFieldChange = ({ name, value }) => {
    const fields = this.state.fields;
    fields[name] = value;

    this.setState({ fields });
  };

  onFormSubmit = evt => {
    const { fields } = this.state;
    evt.preventDefault();

    const startDate = moment(fields.startDate);
    const endDate = startDate.clone().add(parseInt(fields.totalDays), "days");

    this.setState({ startDate, endDate });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React</h1>
        </header>

        <p className="App-intro">Range Calendar</p>

        <InputFields
          fields={this.state.fields}
          isValid={this.validate()}
          onFieldChange={this.onFieldChange}
          onFormSubmit={this.onFormSubmit}
        />

        {
          this.state.startDate && this.state.endDate 
          ? <Calendar 
              startDate={ this.state.startDate }
              endDate={ this.state.endDate }/>
          : null
        }
      </div>
    );
  }
}

export default App;
