window.addEventListener('load', ()=>{
    elboton = document.getElementById('Aceptar');
    elboton.addEventListener('click', ()=>{
        username = document.getElementById('Username').value;
        email = document.getElementById('Email').value;
        password = document.getElementById('Password').value;
        password2 = document.getElementById('Password2').value;
        if (username == '' || email == '' || password == '' || password2 == ''){
            alert('Por favor, rellene todos los campos');
            

}