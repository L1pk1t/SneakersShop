import React from 'react';
import classes from "./DrawerList.module.scss";
import DrawerCard from "./DrawerCard/DrawerCard";
import axios, {onRemove} from "axios";


const DrawerList = ({items, onRemove}) => {

    return (
        <ul className={classes.drawer_list}>
            {items.map((obj, index) => (
                <DrawerCard onClick={() => onRemove(obj.id)} key={index + 1} name={obj.name} img={obj.img} price ={obj.price}/>
            ))}
        </ul>
    );
};

export default DrawerList;