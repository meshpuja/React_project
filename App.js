/*
<div id='parent'>
<div id='child1'>
<h1>Hello World</h1>
<h2>Hello World</h2>
</div>
<div id='child2'>
<h1>Hello World</h1>
<h2>Hello World</h2>
</div>
</div>


*/

const heading = React.createElement(
  "div",
  {
    id: "parent",
    xyz: "abc",
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
        xyz: "abc",
      },
      [
        React.createElement("h1", {}, "Hello World1"),
        React.createElement("h2", {}, "Hello World2"),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child2",
        xyz: "abc",
      },
      [
        React.createElement("h1", {}, "Hello World1"),
        React.createElement("h2", {}, "Hello World2"),
      ]
    ),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
