import React from 'react';
import classes from './ad.module.scss'
const Ad = () => {
    return (
        <div className={classes.ad__inner}>
            <div className={classes.ad__img}>
                <img src="img/ad.png" alt=""/>
            </div>
        </div>
    );
};

export default Ad;