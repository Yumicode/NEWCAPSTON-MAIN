// step 1) grab id from html file
const getAllBtn = document.querySelector('#all')
const eeBtns = document.querySelectorAll('.ee-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const eeContainer = document.querySelector('section')

const baseURL ='http://localhost:4040'

// step 2) create callback function = function inside a function
function createEeCard(ee){
    let eeCard = document.createElement('div')
    eeCard.innerHTML = `<h3>${ee.firstName} ${ee.lastName}<h3>
    <p>gender: ${ee.gender} | age: ${ee.age}</p>`
    eeContainer.appendChild(eeCard)
} 

function clearEmployees(){
    eeContainer.innerHTML = ``
}

function getAll(){
    clearEmployees();
   
    axios.get(`$baseURL}/employees`).then((res) => {
        console.log(res.data);
        res.data.forEach(char => createEmployeeCard)
    }).catch((err) => console.log(err));
    
}    

function getOneEe(name){
    clearEmployees();
    axios.get('${baseURL}/employee${name}').then(res => {
        createEmployeeCard(res.data[0]);
     }).catch(err => console.log(err));
}

function addEmployee(e){
    e.preventDefault();
    clearEmployees();

    const body = {
        firstName: newFirstInput.value,
        lastName: newLastInput.value,
        gender: newGenderDropDown.value,
        age: newAgeInput.value,
        
    }
    
    axios.post(`${baseURL}/employee`, body).then(res => {
    console.log(res.data);
    res.data.forEach(char => createEmployeeCard)
    }).catch(err => console.log(err));
}

getAllBtn.addEventListener("click", getAll);
eeBtns.forEach(eeBtn => eeBtn.addEventListener('click', () => getOneEe(eeBtn.id)));
ageForm.addEventListener("submit", getOld)
createForm.addEventListener("submit", addEmployee)
