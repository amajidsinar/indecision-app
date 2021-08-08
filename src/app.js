console.log('App.js is running!')

var template = (
    <div>
        <h1>Indecision App</h1> 
        <p>This is some info</p>
        <h1>WTF</h1>
    </div>
);

var user = {
    name: "wtf",
    age: 27,
    location: "mempool"
}

var template2 = (
    <div>
        <h1>name: {user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var user = {
    title: 'How To Kill A Mockingbird',
    subtitle: 'Subtitle',
    options: []
};

var template3 = (
    <div>
        <h1>Title: {user.title}</h1>
        {user.subtitle && <p>Subtitle: {user.subtitle}</p>}
        <p>{user.options.length > 0 ? "Here are your options" : "No options"} </p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot)