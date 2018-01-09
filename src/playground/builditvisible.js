console.log('App is running');

let state = false;

function toggleMe()  {
    state = !state 
    renderApp();
};

var currentText = 'showDetails';

function renderApp() {
    var template = (
        <div>
            <h1> Visibility Toggle </h1>
        <button onClick = { toggleMe } > { state ? 'Hide details' : 'Show details' } </button>
        { state && <p> "here is some text" </p>}
        </div>
    );

    var appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);

}

renderApp();