let musicas = [
   {titulo:'Deixe me ir', artista:'Baviera, Knust e Pablo Martins', scr:'musicas/deixe-me ir - speed up (online-audio-converter.com).mp3',
   img:'imagenss/Deixemeir.jpg'},
   {titulo:'Mas Existe Um Lugar', artista:'Manoel Gomes, Cryzin e Kaio Viana', scr:'musicas/Cryzin, Manoel Gomes, Kaio Viana - Mas Existe Um Lugar (Remix) (online-audio-converter.com) (1).mp3',
   img:'imagenss/Sdds.jpg'},
   {titulo:'CORINGA', artista:'Jão', scr:'musicas/Jão - CORINGA (online-audio-converter.com).mp3',
   img:'imagenss/jao.jpg'}
];

let musica = document.querySelector('audio');

let indexMusica = 0;

let duracaoDaMusica = document.querySelector('.final');

let imagem = document.querySelector('img');

let nameMusic = document.querySelector('.descricao h2');

let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos

document.querySelector('.btnplay').addEventListener('click', tocarMusica);

document.querySelector('.btnpause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atBarra);

document.querySelector('.voltar').addEventListener('click', () => {
   indexMusica--;
   if (indexMusica < 0) {
      indexMusica = 2;
  }
   renderizarMusica(indexMusica);
});
document.querySelector('.proxima').addEventListener('click', () => {
   indexMusica++;
   if (indexMusica > 2){
       indexMusica = 0;
   }
   renderizarMusica(indexMusica);
});

//funções
function renderizarMusica(index){
   musica.setAttribute('scr', musicas[index].scr);
   musica.addEventListener('loadeddata', () => {
      nameMusic.textContent = musicas[index].titulo;
      nomeArtista.textContent = musicas[index].artista;
      imagem.scr = musicas[index].img;
      duracaoDaMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
   });
}

function tocarMusica(){
   musica.play();
   document.querySelector('.btnpause').style.display = 'block';
   document.querySelector('.btnplay').style.display = 'none';
}

function pausarMusica(){
   musica.pause();
   document.querySelector('.btnpause').style.display = 'none';
   document.querySelector('.btnplay').style.display = 'block';
}

function atBarra(){
   let barra = document.querySelector('progress');
   barra.style.width = Math.floor((musica.currentTime / musica.duration) *100) + '%';
   let tempoPerCorrido = document.querySelector('.inicio');
   tempoPerCorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
   let campoMinutos = Math.floor(segundos / 60);
   let campoSegundos = segundos % 60;
   
   if(campoSegundos < 10 ){
      campoSegundos = '0' +campoSegundos
   }
   
   return campoMinutos+':'+campoSegundos
}


// função da senha
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
