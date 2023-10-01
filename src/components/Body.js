import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = ()=>{
    const [resList, setResObj] = useState(resObj);
    console.log(resObj);
    return (
        <div className="body">
            <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filterList = resObj.filter((res)=>res.info.avgRating>4);
                setResObj(filterList);
            }}>Top Rated Restaurants</button>
            <button className="filter-btn" onClick={()=>{
               // const filterList = resObj.filter((res)=>res.info.avgRating>4);
                setResObj(resObj);
            }}>All Restaurants</button>
            </div>

            <div className="res-container">
                {
                    resList.map((restaurant) =>
                    (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
                    // resObj.map((restaurant) =><RestaurantCard key={index} resData={restaurant} />)
                }
            </div>
        </div>

    )
};
export default Body;