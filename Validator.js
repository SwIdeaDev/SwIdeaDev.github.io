function authenticate() {
    var x = document.getElementById('usr').value;
    var y = document.getElementById('pwd').value;
    if(x=='admin' && y=='123456')
        window.location = "/dash_board.html";
    else
        alert("Login Unsuccessful. Please try again")
}
