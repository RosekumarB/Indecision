import React from 'react';
import Option from './Option';

export default class Options extends React.Component {


    render() {
        return(
            <div>
                <div className="widget-header">
                    <h3 className="widget-header__title"> Your Options </h3>
                    <button
                        className = "button button--link"
                        onClick = { this.props.handleDeleteOptions }
                        disabled = { !this.props.hasOptions  } 
                    > 
                        Remove All
                    </button>
                </div>
                    {
                        !this.props.hasOptions && <p className="widget__message"> Please add an option to get started </p>
                    }
                    { 
                        this.props.options.map((option, index) => <Option count = { index + 1 } key = { option } handleDeleteOption = {this.props.handleDeleteOption} text = { option } /> )
                    }
                
            </div>
        );
    }
}
