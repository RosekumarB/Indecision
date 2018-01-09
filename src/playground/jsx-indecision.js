console.log('app is running');

var app = {
    title: "This is the app",
    subtitle: "React app",
    options: []
}


const onFormSubmit = (e) => {
    e.preventDefault();

    const option  = e.target.elements.options.value;
    if (option) {
        app.options.push(option);
        e.target.elements.options.value = '';
    }
    renderApp();
}

const removeAll = (e) => {
    app.options = [];
    renderApp();
};

const makeDecision = () => {
    const randomNum = Math.floor((Math.random() * app.options.length));
    const option = app.options[randomNum];
    alert(option)
    console.log(randomNum);
};


function renderApp() {
    var template = (
        <div>
            { app.subtitle && <p> { app.subtitle } </p> } 
            { app.options.length > 0 ? <p> "here are your options" </p> : <p> "No options" </p> } 
            { app.options.length }
            <ol>
             {
                 app.options.map( (option) => {
                   return <li key = { option }> { option } </li>
                 })
             }
            </ol>
            <button disabled = { app.options.length === 0 }onClick = { makeDecision }> What should I do ? </button>
            <button onClick = { removeAll }> removeAll </button>
            <form onSubmit = { onFormSubmit } >
                <input type = "text" name = "options" />
                <button> Add Option </button>
            </form>
        </div>
    )

    var appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);
}

renderApp();

