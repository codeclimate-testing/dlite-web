import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom';

class Names extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            names: {
                first: "",
                middle: "",
                last: ""
            }
        };

        this.onChangeNames = this.onChangeNames.bind(this);
        this.onClickSaveNames = this.onClickSaveNames.bind(this);
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

    onClickSaveNames() {
        //TODO:
        console.log("Saving Names");
    }

    render() {
        return (
            <div>
                <Link to='/' >Back to application</Link>
                <div className="input-container">
                    <input name="firstName" placeholder="First Name" onChange={this.onChangeNames} value={this.state.names.first} />
                    <input name="middleName" placeholder="Middle Name" onChange={this.onChangeNames} value={this.state.names.middle} />
                    <input name="lastName" placeholder="Last Name" onChange={this.onChangeNames} value={this.state.names.last} />
                    <input type="button" name="saveNamesButton" value="Save" onClick={this.onClickSaveNames} />                
                </div>
            </div>
        )
    }

}

export default Names;