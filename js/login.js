const login = document.getElementsByClassName('leftsidebar_content-button2')
const email = document.getElementById('email');
const password = document.getElementById('password')
const id = new Date().getMilliseconds()

function addlocal() {
    var psw = password.value;

    if (psw.length >= 8) {
        addLocalstorage(id, email.value, password.value)
        location.href = "html/main.html"
        
    } else {
        document.getElementById('alert').innerHTML = "password must be at least 8 characters long";
    }
}
const nic = document.getElementById('nicname');1
function getLocalstorage() {
    if (localStorage.getItem('name'))
        return JSON.parse(localStorage.getItem('name'))
    else 
        return []
}

function addLocalstorage(id, name, password) {
    const data = { id, name, password }
    const items = getLocalstorage()
    items.push(data)
    localStorage.setItem('name', JSON.stringify(items))
    location.href = 'html/main.html'
}