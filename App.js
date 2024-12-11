/**
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

let parent = React.createElement('div', { id: "parent" },
    [
        React.createElement('div', { id: "child1" },
            [React.createElement('h1', {}, "child1 h1 tag"),
            React.createElement('h2', {}, "child1 h2 tag")
            ]),
        React.createElement('div', { id: "child2" },
            [React.createElement('h1', {}, "child2 h1 tag"),
            React.createElement('h2', {}, "child2 h2 tag")
            ])]
);
console.log(parent, typeof (parent))
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); // converts the createElement to html tag and show it in browser
