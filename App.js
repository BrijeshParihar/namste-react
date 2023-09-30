import React from "react"
import ReactDOM from "react-dom/client";
//   
const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
               <img className="logo" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-app-by-town-brandcrowd.png"/>
            </div>
            <div className="nav-itmes">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>contact us</li>
                    <li>cart</li>
                </ul>
            </div>

        </div>
    );
};
const RestaurantCard = () =>{
    return (
        <div className="res-card">
        <img className="res-logo" 
        alt="res-logo" 
        src ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/59b64f9bb67234987652437f21d379c2"
        />
        <h3>Delhi wale.</h3>
        <h3>North indian</h3>
        <h3>4.4 stars</h3>
        </div>
    );
};
const Body = ()=>{
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            </div>
        </div>

    )
};
const AppLayout =()=>{
    return <div className="app">
        <Header/>
        <Body/>
    </div>
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);