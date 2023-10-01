import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;
    
    return (
        <div className="res-card">
        <img className="res-logo" 
        alt="res-logo" 
        src ={CDN_URL+ resData.info.cloudinaryImageId}/>
        <h3 className="resName">{resData.info.name}</h3>
        <h3 className="cuisines">{resData.info.cuisines.join(", ")}</h3>
        <h3>{resData.info.avgRating}</h3>
        <h3>{resData.info.costForTwo}</h3>
        </div>
    );
};
export default RestaurantCard