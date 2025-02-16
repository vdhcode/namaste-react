// This is how to display UI using React
// createElement lets you create a React element. It serves as an alternative to writing JSX.
// ReactElement(is an Object) => HTML(Browser Understands ReactDOM.createRoot() and converts it into HTML)
// const element = createElement(type, props, ...childrens)
// const element = createElement(HTML tags, HTML attributes, ...childrens)
// example1: createElement('h1', { className: 'greeting' }, 'Hello');
// example2: createElement('div', { className: 'parent' }, [createElement('h1', { className: 'child1' }, 'Child1'), createElement('h2', { className: 'child2'}, 'Child2]);
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

// More complicated code
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
/* Passing react element inside root */
root.render(container);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);
