function mostrarsenha(){
   var inputPass = document.getElementById('senha')
   var btnShowPass = document.getElementById('Btn-senha')

   if(inputPass.type === 'password'){
   inputPass.setAttribute('type','text')
   btnShowPass.classList.replace('bi-eye','bi-eye-slash')
}
else{
   inputPass.setAttribute('type','password')
   btnShowPass.classList.replace('bi-eye-slash','bi-eye')
}
}
function mostrarSenha(){
   var inputPass = document.getElementById('Crie')
   var btnShowPass = document.getElementById('Btn-Senha')

   if(inputPass.type === 'password'){
   inputPass.setAttribute('type','text')
   btnShowPass.classList.replace('bi-eye','bi-eye-slash')
}
else{
   inputPass.setAttribute('type','password')
   btnShowPass.classList.replace('bi-eye-slash','bi-eye')
}
}

