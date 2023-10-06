import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import {API_URL} from "../utils/constants";
import Shimmer from "./Shimmer"
const Body = ()=>{
    console.log("render");
    const [resList, setResList] = useState(null);
    useEffect(()=>{
        console.log("api called...")
        fetchData();
    },[]);//CALL BACK FUNCTION, DEPENDECNY 

    const fetchData = async ()=>{
        console.log("api calling");
       
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5800226&lng=73.706594&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         const json = await data.json();
        
   
        //const apidata = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(json?.data);
       // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setResList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResList(resObj);
    };
if(resList==null)
{
    return <Shimmer/>;
}
    return (
        <div className="body">
            <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filterList = resObj.filter((res)=>res.info.avgRating>4);
                setResList(filterList);
            }}>Top Rated Restaurants</button>
            <button className="filter-btn" onClick={()=>{
               // const filterList = resObj.filter((res)=>res.info.avgRating>4);
               setResList(resObj);
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