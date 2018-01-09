import React from 'react';

export default class Option extends React.Component {
    render() {
        return(
            <div className = "option">
                <p className="option__text"> {this.props.count}. { this.props.text} </p>
                <button 
                    className = "button button--link"
                    onClick = {()=> {
                        this.props.handleDeleteOption(this.props.text)
                    }}
                > Remove this </button>
            </div>
        );
    }
}