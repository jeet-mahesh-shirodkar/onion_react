import cardList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const BodyComp = () =>{
    return (
        <div className="bodyComp">
            <div className="search-container">
                Search
            </div>
            <div className="res-container">
              {cardList.map((restaurant)=> (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>))}
            </div>
        </div>
    )
}

export default BodyComp;