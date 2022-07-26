import React from 'react';
import classes from "./CloseBtn.module.scss";


const CloseBtn = () => {
    return (
        <button className={classes.close__btn}>
            <img src="/img/mini-arrow.svg" alt="close"/>
        </button>
    );
};

export default CloseBtn;