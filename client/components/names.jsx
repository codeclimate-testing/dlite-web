'use strict';

import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { submitNames } from "../actions/index";

class Names extends React.Component {
    constructor(props, context) {        
        super(props, context);
        
        props.names ? this.state = { names: props.names } : this.state = { names : { first: "", middle: "", last: "" } };

        this.onChangeNames = this.onChangeNames.bind(this);
        this.onSubmitNames = this.onSubmitNames.bind(this);
    }

    onChangeNames(event) {
        const names = this.state.names;
        switch(event.target.name){
            case "firstName":
                names.first = event.target.value;
                break;
            case "middleName":
                names.middle = event.target.value;
                break;
            case "lastName":
                names.last = event.target.value;
                break;
            default:
                break;
        }
        //Update component state.
        this.setState( { names: names } );
    }

    onSubmitNames(event) {
        event.preventDefault();
        this.props.submitNames(this.state.names);
    }

    render() {        
        return (
            <div>
                <Link to='/' >Back to application</Link>
                <form onSubmit={this.onSubmitNames} className="input-container">
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.onChangeNames} value={this.state.names.first} />                    
                    <input type="text" name="middleName" placeholder="Middle Name" onChange={this.onChangeNames} value={this.state.names.middle} />
                    <input type="text" name="lastName" placeholder="Last Name" onChange={this.onChangeNames} value={this.state.names.last} />
                    <button type="submit" name="submitNamesButton"> Submit </button>
                </form>
            </div>
        )
    }

}

function mapStateToProps(state) {  
  return {
    names: state.names
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitNames: submitNames }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Names);
