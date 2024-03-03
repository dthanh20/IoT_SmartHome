function loginUser() {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "admin" && password === "123") {
        window.location.href = "../MainScreen/main.html";
        return true;    
    }
    else {
        alert("Login failed. Please enter a username or password again");
        return false;
    }
}
