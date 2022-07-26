import React from 'react';
import classes from "./SubmitBtn.module.scss";
const SubmitBtn = ({onClick, text, disabled}) => {
    return (
        <button disabled={disabled} onClick={onClick} className={classes.submit__btn}>
            {text}
            <img src="/img/arrow-right.svg" alt="arrow-right"/>
        </button>
    );
};


export default SubmitBtn;