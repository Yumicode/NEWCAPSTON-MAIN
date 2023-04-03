//submit buttons
const getSubmit = document.getElementById('getSubmit');
const getParamsSubmit = document.getElementById('getParamsSubmit');  
const getQureySubmit = document.getElementById('getQuerySubmit');

//input
const paramsInput = document.getElementById('params-input');
const QueryInput = document.getElementById('query-input');

//response Section 
const responseSection = document.getElementsByClassName('response-area')[0];

//handle submits
getSubmit.addEventListener('click', () => {
    axios   
        .get('http://localhost:4040/users')
        .then(res => addToView(res.data))
});

getParamsSubmit.addEventListener('click', () => {
    axios   
        .get(`http://localhost:4040/users/${paramsInput.value}`)
        .then(res => addToView(res.data))
});

getQuarySubmit.addEventListener('click', () => {
    axios   
        .get(`http://localhost:4040/users${quaryInput.value}`)
        .then(res => addToView(res.data))
});

getSubmit.addEventListener('click', () => {
    axios   
        .get('http://localhost:4040/employees')
        .then(res => addToView(res.data))
});

getParamsSubmit.addEventListener('click', () => {
    axios   
        .get(`http://localhost:4040/employees/${paramsInput.value}`)
        .then(res => addToView(res.data))
});

getQuarySubmit.addEventListener('click', () => {
    axios   
        .get(`http://localhost:4040/employees${quaryInput.value}`)
        .then(res => addToView(res.data))
});