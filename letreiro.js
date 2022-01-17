


function abrir(titulo){
    let corpo = document.body;
    let titlle = document.createElement('h1');
    let imagem = document.createElement('img');
    corpo.append(titlle);
    corpo.append(imagem);

    titulo = document.querySelector('h1');
    imagens = document.querySelector('img');
    imagens.src = "Seja-bem-vindo.png";
    titulo.innerText = 'Estamos Aberto!';
    titulo.style.color = "white";
    titulo.style.border = "7px solid green"
    titulo.style.textAlign = "center"; 
    titulo.style.fontSize = "60px";
    titulo.style.fontFamily = "Sans-serif"
    titulo.style.backgroundColor = "green"
    imagens.style.margin = "570px";
    imagens.style.marginTop = "100px";

};

function fechar(titulo){

    let corpo = document.body;
    let titlle = document.createElement('h1');
    let imagem = document.createElement('img');
    corpo.append(titlle);
    corpo.append(imagem);
   
    titulo = document.querySelector('h1');
    titulo.innerText = 'Estamos Fechado!';
    imagens = document.querySelector('img');
    imagens.src = "closed.jpg";
    titulo.style.color = "white";
    titulo.style.border = "7px solid red";
    titulo.style.textAlign = 'center';
    titulo.style.fontSize = "60px";
    titulo.style.fontFamily = "Sans-serif"
    titulo.style.backgroundColor = "red"
    imagens.style.margin = "500px";
    imagens.style.marginTop = "10px";


};