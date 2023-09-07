// This is how to display UI using React
// createElement lets you create a React element. It serves as an alternative to writing JSX.
// const element = createElement(type, props, ...children)
// example: createElement('h1', { className: 'greeting' }, 'Hello');
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste Everyone!"
);
console.log(heading);

// This can be rendered using React
// <div id="container">
//   <h1>Namaste Everyone!</h1>
//   <h2>by Vinayak Hegde</h2>
// </div>

const heading2 = React.createElement(
  "h2",
  { id: "heading2" },
  "by Vinayak Hegde"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
/* Passing react element inside root */
root.render(container);
