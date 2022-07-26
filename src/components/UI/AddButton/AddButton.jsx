import React from 'react';
import classes from "./AddButton.module.scss";


const AddButton = ({onPlus, isAdded}) => {
    return (
        <button onClick={onPlus} className={isAdded ? classes.add_btn_active : classes.add_btn }>
            <img src={isAdded ? "/img/confirm.svg" : "/img/add.svg"} alt="plus"/>
        </button>
    );
};

export default AddButton;