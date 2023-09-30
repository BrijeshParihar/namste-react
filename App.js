import React from "react"
import ReactDOM from "react-dom/client";
//   
const jsxheading = (
    <h1 className="head" tableIndex="5">
    This is from using jsx 
    </h1> );
console.log(jsxheading);


const HeadingComponent1 = ()=> <div id ="container"><h1 className="heading"> This is functional component</h1></div>
const HeadingComponent = ()=> 
(<div id ="container">
    <HeadingComponent1/>
    <h1 className="heading"> This is functional component</h1>
    </div>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);