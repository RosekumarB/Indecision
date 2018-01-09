console.log('App is running');

var count = 0;

function addOne() {
    console.log('adding one');
    count++;
    renderApp();
};

function subOne() {
    console.log('minus one')
    count--;
    renderApp();
};

function reset() {
    console.log('reset one');
    count = 0;
    renderApp;
};


var renderApp = () => {
    var template = (
        <div>
            <p> count: {count} </p>
            <button onClick = { addOne } id = "addOne"> +1 </button>
            <button onClick = { subOne } id = "subOne"> -1 </button>
            <button onClick = { reset } id = "reset"> reset </button>    
        </div>
    )
        var appRoot = document.getElementById('app');
        ReactDOM.render(template, appRoot);
}

renderApp();

