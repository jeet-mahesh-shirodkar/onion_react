import { IMG_URL } from "../utils/constant";

const RestaurantCard =(props)=>{
    const{resData} = props;
    //console.log(resData)
    const {id,name,cloudinaryImageId,avgRating,sla,costForTwo,cuisines} = resData?.info
    return (
        <div className="restaurantCardParent">  
            <div className="restaurantCard" key={id}>
              <div className="resImgContainer">
                <img
                className="resImg"
                alt="resImg"
                src={IMG_URL}/>
            </div>
            <h3>{name}</h3>
            <h6>{cuisines.join(', ')}</h6>
            <h5>{costForTwo}</h5>
            <h5>{avgRating} ⭐️</h5>
            <h5>{sla.deliveryTime} mins</h5>
            </div>
        </div>
    )
}

export default RestaurantCard;