
// step 1) grab id from html file
const registrationForm = document.getElementById('createAccount')
const registrationEmail = document.getElementById('registrationEmail')
const registrationPassword = document.getElementById('registrationPassword')

// step 2) create callback function = function inside a function
function addAccount (event) {
    event.preventDefault()
    let body = {
        email: registrationEmail.value, 
        password: registrationPassword.value
    }

    axios.post('http://localhost:4040/users', body)
    .then((res) => {
        console.log(res.data)
        alert(`an account with this email: ${body.email} is now good to go`) 
    })
    .catch(err => console.log(err))

}

// step 3) add event listener
registrationForm.addEventListener("submit", addAccount)

 







