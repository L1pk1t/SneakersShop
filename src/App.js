import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import './App.scss';
import Main from "./pages/Home/main/Main";
import Drawer from "./components/Drawer/Drawer";
import axios from "axios";
import Favorites from "./pages/Favorites/Favorites";
import AppContext from "./Services/Contexts/AppContext";
import Profile from "./pages/Profile/Profile";

function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [purchases, setPurchases] = React.useState([])
    const [favorites, setFavorites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartOpened, setCartOpened] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)
    let favoriteEmpty = true


    const fullprice = () => {
       return cartItems.map(item => item.price).reduce((prev, curr) => prev + curr, 0)
    }

    React.useEffect(() => {
        async function fetchData(){
            const cartResponse = await axios.get('https://62bf0fbebe8ba3a10d62f07d.mockapi.io/cart')
            const favoritesResponse = await axios.get('https://62bf0fbebe8ba3a10d62f07d.mockapi.io/favorite')
            const itemsResponse = await axios.get('https://62bf0fbebe8ba3a10d62f07d.mockapi.io/items')

            setIsLoading(false)

            setCartItems(cartResponse.data)
            setFavorites(favoritesResponse.data)
            setItems(itemsResponse.data)
        }
        fetchData()
    },[])

    React.useEffect(() => {
        if(cartOpened) {
            document.body.style.overflow = "hidden"
        }
    }, [cartOpened])

    React.useEffect(() => {
        if(favorites.length > 0){
            favoriteEmpty = false
        }else{
            favoriteEmpty = true
        }
    },[favorites])

    if(!cartOpened) {
        document.body.style.overflow = "auto"
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://62bf0fbebe8ba3a10d62f07d.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }


    const onAddToCart = async (obj) => {
        try {
            if (cartItems.find((item) => Number(item.id) === Number(obj.id))){
                setCartItems((prev) => prev.filter(item => item.id !== obj.id))
                axios.delete(`https://62bf0fbebe8ba3a10d62f07d.mockapi.io/cart/${obj.id}`)
            }else{
                const { data } = await  axios.post('https://62bf0fbebe8ba3a10d62f07d.mockapi.io/cart', obj)
                setCartItems((prev) => [...prev, data])
            }
        }
        catch (error){
            alert("Не удалось добавить в корзину")
        }
    }

    const isItemFavorited = (id) => {
        return favorites.some(obj => Number(obj.id) === Number(id))
    }

    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.id) === Number(id))
    }


    const onAddToFavorite = (obj) => {
        if(favorites.find(favObj => favObj.id === obj.id)){
            axios.delete(`https://62bf0fbebe8ba3a10d62f07d.mockapi.io/favorite/${obj.id}`)
            setFavorites((prev) => prev.filter((item) => item.id !== obj.id))
        }else{
            axios.post('https://62bf0fbebe8ba3a10d62f07d.mockapi.io/favorite', obj)
            setFavorites((prev) => [...prev, obj])
        }
    }


  return (
      <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, isItemFavorited, setCartOpened, setCartItems }}>
          <div className="wrapper">
              {cartOpened && <Drawer
                  onRemove={onRemoveItem}
                  fullprice={fullprice()}
                  items={cartItems}
                  setCartClose={() => setCartOpened(false)}
              />}
              <Header
                  favoriteEmpty={favoriteEmpty}
                  fullprice={fullprice()}
                  onClickCart={() => setCartOpened(true)}
              />
              <Routes>
                  <Route path="/favorites"  element={<Favorites
                      onAddToFavorite={onAddToFavorite}
                      onAddToCart={onAddToCart}
                      setFavorites={setFavorites}
                      setCartItems={setCartItems}
                  />} />
                  <Route path="/profile"  element={<Profile
                      purchases={purchases}
                      onAddToFavorite={onAddToFavorite}
                      onAddToCart={onAddToCart}
                      setFavorites={setFavorites}
                      setCartItems={setCartItems}
                  />} />
                  <Route index element={<Main
                      onAddToFavorite={onAddToFavorite}
                      onAddToCart={onAddToCart}
                      isLoading={isLoading}
                      favorites={favorites}
                      setFavorites={setFavorites}
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                      items={items}
                  />}
                  />
              </Routes>
          </div>
      </AppContext.Provider>
  );
}

export default App;
