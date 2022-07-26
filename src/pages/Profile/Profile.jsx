import React from 'react';
import classes from "./Profile.module.scss";
import {Link} from "react-router-dom";
import CloseBtn from "../../components/UI/CloseBtn/CloseBtn";
import ProfileEmpty from "./ProfileEmpty/ProfileEmpty";
import ProfileList from "./ProfileList/ProfileList";
import axios from "axios";

const Profile = ({setCartItems, cartItems, onAddToCart, onAddToFavorite}) => {
    const [purchases, setPurchases] = React.useState([])
    React.useEffect(()=>{
        (async ()=>{
            const {data} = await axios.get('https://62bf0fbebe8ba3a10d62f07d.mockapi.io/orders')
            // console.log(data.map((obj)=>obj.items).flat())
            // console.log(data.reduce((prev,obj)=>[...prev, ...obj.items], []))
            setPurchases(data.reduce((prev,obj)=>[...prev, ...obj.items], []))
        })()
    },[])
    return (
        <div className={classes.profile}>
            <div className={classes.container}>
                {purchases.length > 0 ? <div className={classes.profile__inner}>
                    <div className={classes.profile__header}>
                        <Link to="/"><CloseBtn /></Link>
                        <h2>Мои покупки</h2>
                    </div>
                    <ProfileList onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} cartItems={cartItems} purchases={purchases} setCartItems={setCartItems}/>
                </div>: <ProfileEmpty />}
            </div>
        </div>
    );
};

export default Profile;