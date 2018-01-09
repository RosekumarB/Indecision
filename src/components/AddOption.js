import React from 'react';

export default class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOptions(e) {
        e.preventDefault();
        const option = e.target.elements.optionText.value;
        const error = this.props.handleAddOptions(option)
        if(error) {
            this.setState(()=>{
                return {
                    error:error
                }
            })
        } else {
            e.target.elements.optionText.value = ''
            this.setState(()=>{
                return {
                    error:undefined
                }
            })
        }
    }

    render() {
        return(
            <div> 
                { this.state.error && <p className="add-option-error"> error </p>}
                <form className="add-option" onSubmit = { this.handleAddOptions }  >
                    <input className="add-option__input" type = "text" name = 'optionText' />
                    <button className="button"> Add option </button>
                </form>
            </div>
        );
    }
}
