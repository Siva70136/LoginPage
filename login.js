let nameEl = document.getElementById('name');
let pwdEl = document.getElementById('PWD');
let nameErrMsgEl = document.getElementById('nameErrMsg');
let emailErrMsgEl = document.getElementById('emailErrMsg');
let addUserFormE1 = document.getElementById('addUserForm');


nameEl.addEventListener('change', function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
        nameErrMsgEl.classList.add('warning');
    } else {
        nameErrMsgEl.textContent = "";
    }

});

pwdEl.addEventListener('change', function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
        emailErrMsgEl.classList.add('warning');
    } else {
        emailErrMsgEl.textContent = "";
    }

});


function validateFormData() {
    let name = nameEl.value;
    let pwd = pwdEl.value;
    var x = new RegExp("[A-Za-z0-9]");
    var x1 = new RegExp("[A-Za-z0-9]{8}");
    if (name === "") {
        nameErrMsgEl.textContent = "Required*";
        nameErrMsgEl.classList.add('warning');
    }
    if (pwd === "") {
        emailErrMsgEl.textContent = "Required*";
        emailErrMsgEl.classList.add('warning');
    }
    if (name.match(x)) {
        if (pwd.match(x1)) {
            alert("valid details");
        } else {
            alert("Invalid Password");
        }

    } else {
        alert("Invalid Username");
    }
}


addUserFormE1.addEventListener('submit', function(event) {
    event.preventDefault();
    validateFormData();

});
