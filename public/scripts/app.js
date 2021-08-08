"use strict";

console.log('App.js is running!');

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "h1",
        null,
        "WTF"
    )
);

var user = {
    name: "wtf",
    age: 27,
    location: "mempool"
};

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "name: ",
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

var user = {
    title: 'How To Kill A Mockingbird',
    subtitle: 'Subtitle',
    options: []
};

var template3 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Title: ",
        user.title
    ),
    user.subtitle && React.createElement(
        "p",
        null,
        "Subtitle: ",
        user.subtitle
    ),
    React.createElement(
        "p",
        null,
        user.options.length > 0 ? "Here are your options" : "No options",
        " "
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot);
