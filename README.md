# onion_react
Layering of react application

# CDN 
- Content Delivery Network : which is a network of servers that  distribute web content to users based on their location.

# Parcel
- Dev build
- Server 
- Hot Module Replacement (or HMR) is one of the most useful features offered by webpack
- Caching faster build
- File watching algorithms 
- Image Optimization
- Minification
- Bundling
- Compress
- Consitent hashing
- code splitting 
- Differential bundling - support older browsers
- Error Handling
- HTTPs
- Tree Shaking - It's a process that removes unused modules,     functions, and variables from your JavaScript code during the build process.
It relies on the static structure of ES modules (import and export) to determine which parts of your code are actually used.
- Diagnostic
- Transpiles code to understand JS Engine(Browsers) -> Parcel gives responsibility to Babel for this job

# React createElement 
- React.createElement ={code}> React Element JS Object ={ReactDom}> HTMLElement(render)
- Plain Javascript Object

# JSX 
- Javascript syntax extension which allows developer to write html-like or xml-like code in Javascript files.
- JSX => React.createElement => ReactElement JS Object => HTMLElement(render)
- This conversion is done by Babel
- Attribute should be in camelCase format.
- We can write any javascript code inside JSX using { 'curly braces' } 
- Takes care of cross site scripting attack

# Functional Component
- JavaScript Function which takes props as arguments and returns JSX code
- Component Composition - Using child component in parent component is called component composition

# Config Driven UI
- UI is based on configuration like specific location, specific users.
- It is a user Interface that is built and configured using a
declaration configuration file or data structure, rather than
being hardcoded.
- Config is the data coming from the api which keeps on changing
according to different factors like user, location, etc.

# OptionChaining 
- resData?

# Props
- Data passed as an argument to Component
- Passing the Arguments from component to component is called as Props Passing

# Unique Key id while using map
- When we have components at same level and if a new component
comes on the first without ID, DOM is going to re-render all the
components again. As DOM can’t identify where to place it.
- But if we give each of them a unique ID then react knows where
to put that component according to the ID. It is a good
optimization and performance thing.

# Hooks
- JS utility function

# useState
- When the state variable update, react will re-renders the component.
- Point about state variables is that whenever they update, React triggers a reconciliation cycle and re-renders the component.
- This means that as soon as the data layer changes, React promptly updates the UI layer. The data layer is always kept in sync with the UI layer.
- To achieve this rapid operation, React employs a reconciliation algorithm, also known as the diffing algorithm or React-Fibre.
- React-Fiber - a powerhouse reimplementation of React's algorithm. The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its
headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames. These days, we can use JavaScript and React alongside popular libraries like GSAP (GreenSock Animation Platform) and Three.js.

# Virtual DOM Obj
- When you create Element in React, you are actually creating Virtual DOM Objects.
These virtual replicas are synced with the real DOM, a process known as "Reconciliation" or React "diffing" algorithm.
- Essentially, every rendering cycle compares the new UI blueprint (updated VDOM) with the old one (previous VDOM) and makes precise changes to the actual DOM accordingly.

# React Fiber Architecture
- Increase its suitablity for areas like animation, layout and gestures. Its headline feature is incremental rendering, The ability to split rendering work into chunks and spread it out over multiple frames.

# useEffect
- useEffect hook runs, once the component is loaded(render method runs).
- Two arguments are passed in useEffect function 1 - arrow function 2 - dependency array. 
- Loaded -> Render -> Api -> Re-Render.
