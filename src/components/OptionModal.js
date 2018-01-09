import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal
        isOpen = { !!props.selectedOption }
        onRequestClose = { props.handleClearState }
        contentLabel = "You do this"
    >
    <h3> Selected Option </h3>
    { props.selectedOption && <p>  { props.selectedOption } </p> }
    <button onClick = { props.handleClearState } > Okay </button>
    </Modal> 
)
export default OptionModal;