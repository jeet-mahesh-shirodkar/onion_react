import { IMG_URL } from "../utils/constant";

const RestaurantCard =(props)=>{
    const{resData} = props;
    console.log(resData)
    const {uuid,name,cloudinaryImageId,avgRating,deliveryTime,costForTwo,cuisines} = resData?.data
    return (
        <div className="restaurantCardParent">  
            <div className="restaurantCard" key={uuid}>
              <div className="resImgContainer">
                <img
                className="resImg"
                alt="resImg"
                src={IMG_URL}/>
            </div>
            <h3>{name}</h3>
            <h6>{cuisines.join(', ')}</h6>
            <h5>₹{costForTwo/100} for Two</h5>
            <h5>{avgRating} ⭐️</h5>
            <h5>{deliveryTime} mins</h5>
            </div>
        </div>
    )
}

export default RestaurantCard;