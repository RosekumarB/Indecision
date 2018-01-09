
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import Option from './Option';
import AddOption from './AddOption';
import OptionModal from './OptionModal';



export default class Indecision extends React.Component {
   
    state = {
        options: [],
        selectedOption: undefined
    }

   

    handleDeleteOptions = () => {
        console.log('called')
        this.setState(()=>{
             return {
                 options: []
             }
        });
    }

    handleDeleteOption = (option) =>  {
        console.log('delete option callled');
        this.setState( (prevState) => {
            return {
                options: prevState.options.filter((opt) => option != opt) 
            }
        });
    }

    handleAddOptions = (option) => {
        if(!option) {
            return 'Enter a valid value to add to the options'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this already exists'
        } 
        this.setState(()=> {
            return {
                options: this.state.options.concat([option])
            }
        });

    }

    handlePick = () => {
        console.log('popping alert')
        const randomNum = Math.floor((Math.random() * this.state.options.length));
        const option = this.state.options[randomNum];
        this.setState(() => {
            return {
                selectedOption: option
            }
        })
    }

    handleClearState = () => {
        console.log('clearing state');
        this.setState( () => ({
            selectedOption: undefined
        }))
    }

    render() {
         const title = "Indecision App";
         const subtitle = 'Put your life in the hands of the computer';

        return(
            <div>
                
                <Header 
                    title = { title } 
                    subtitle = { subtitle } 
                />
                <div className="container">
                    <Action  
                        handlePick = {this.handlePick} 
                        hasOptions = { this.state.options.length > 0 } 
                    />
                    <div className="widget">
                        <Options 
                            hasOptions = { this.state.options.length > 0 } 
                            handleDeleteOptions = { this.handleDeleteOptions } 
                            options = { this.state.options }
                            handleDeleteOption = {this.handleDeleteOption}
                        />

                        <AddOption 
                            handleAddOptions = { this.handleAddOptions } 
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption = {this.state.selectedOption} 
                    handleClearState = { this.handleClearState }
                />
            </div>
        );
    }
}





















/* We removed this as we are using ES6 class properties */

 // constructor(props) {
    //     super(props);
    //     this.state = {
    //         options:['thing one', 'thing two']
    //     };

    //    // this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOptions = this.handleAddOptions.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    // }