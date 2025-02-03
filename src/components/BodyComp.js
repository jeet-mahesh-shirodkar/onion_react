import cardList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {use, useEffect, useState} from 'react';
import Shimmer from "./Shimmer";

const BodyComp = () =>{
    const [restaurantList,setRestaurantList] = useState([]);
    const [searchText,setSearchText] = useState("");

    // whenever the state variable update,
    // react trigger a reconciliation cycle(re-render the component) 
    
    console.log(" <= Body Component loaded => ");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0744857&lng=72.99778409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        console.log(restaurantList)
        setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    return (
        <div className="bodyComp">
            {(restaurantList.length === 0) && <Shimmer/>}
            <div className="filter-container">
                    <input 
                        autoFocus
                        className="search-input" 
                        value={searchText} 
                        onChange={ (e) => {
                            setSearchText(e.target.value);
                        }}/>
                    <button 
                        className="search-btn"
                        onClick={()=>{
                            let rese = restaurantList
                            let searchedRes = rese.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )
                            setRestaurantList(searchedRes);
                        }}>Search
                    </button>
                <button 
                className="filter-btn"
                onClick={()=> {
                    let filteredList = restaurantList.filter((res) =>
                         res.info.avgRating > 4)
                    setRestaurantList(filteredList);
                }}>
                    Filter Top Rated
                </button>
            </div>
            <div className="res-container">
              {restaurantList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
            </div>
        </div>
    )
}

export default BodyComp;