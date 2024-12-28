/** HTML Code
 * <div id="parent">
 *     <div id="child1">
 *          <h1>child1 h1 tag</h1>
 *          <h2>child1 h2 tag</h2>
 *     </div>
 *     <div id="child2">
 *          <h1>child1 h1 tag</h1>
 *          <h2>child1 h2 tag</h2>
 *     </div>
 * </div>
 */
/** React Code
 *  import React from "react";
    import ReactDOM from "react-dom/client";

    let parent = React.createElement('div', { id: "parent" },
        [
            React.createElement('div', { id: "child1" },
                [   React.createElement('h1', {}, "I am child1 h1 tag"),
                    React.createElement('h2', {}, "child1 h2 tag")
            ]),
            React.createElement('div', { id: "child2" },
                [   React.createElement('h1', {}, "I am child2 h1 tag"),
                    React.createElement('h2', {}, "I am child2 h2 tag")
            ])]
    );
    console.log(parent, typeof (parent))
    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent); 
    // converts the createElement to html tag and show it in browser
 */

import React from "react";
import ReactDom from 'react-dom/client';
import './App.css';
import Header from "./components/Header";
import BodyComp from "./components/BodyComp";

// React Element
/**
 * const heading = React.createElement(
    "h1",
    {id:'heading'},
    "Hello for React element 😍 "
);

//JSX // React Element
const jsxHeading = <h1 id="jsxHeading">Hello from JSX element 🚀 😍 </h1>
console.log(heading);
console.log(jsxHeading);
 */

/**
 * React Component 
const HeadingChild = () =>{
    return (
        <h2 id="headingChild">Hello from child Component 🚀 </h2>
    )
}

*/
/**
 * Header
 *  - Logo
 *  - Nov Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - Img
 *    - Name of Res, Star Rating, cuisine, rates
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <BodyComp/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
//Functions are not valid as a React child. 
//This may happen if you return Heading instead of <Heading /> from render.
// Or maybe you meant to call this function rather than return it.
root.render(<AppLayout/>); //we need to render in tag format as to babel to know.