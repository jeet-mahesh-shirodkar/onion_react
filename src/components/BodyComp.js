import cardList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState} from 'react';

const BodyComp = () =>{
    const [restaurantList,setRestaurantList] = useState(cardList);
    //console.log(restaurantList);
    return (
        <div className="bodyComp">
            <div className="filter-container">
                <button 
                className="filter-btn"
                onClick={()=>{
                    let filteredList = cardList.filter((res) =>
                         res.data.avgRating > 4)
                    //console.log(filteredList);
                    setRestaurantList(filteredList);
                }}>
                    Filter Top Rated
                </button>
            </div>
            <div className="res-container">
              {restaurantList.map((restaurant)=> (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>))}
            </div>
        </div>
    )
}

export default BodyComp;