function preto (){
    document.getElementById('quadrado1').style.background = "black";
    document.getElementById('quadrado2').style.background = "black";
    document.getElementById('quadrado3').style.background = "black";
    document.getElementById('quadrado4').style.background = "black";
    let titulo = document.querySelector('h1');
    titulo.innerText = 'Mudou tudo para cor preta!';

}

function branco (){
    document.getElementById('quadrado1').style.background = "white";
    document.getElementById('quadrado2').style.background = "white";
    document.getElementById('quadrado3').style.background = "white";
    document.getElementById('quadrado4').style.background = "white";
    let titulo = document.querySelector('h1');
    titulo.innerText = 'Mudou tudo para cor branca!';

}

function none(){
    document.getElementById('quadrado1').style.display = "none";
    document.getElementById('quadrado2').style.display = "none";
    document.getElementById('quadrado3').style.display = "none";
    document.getElementById('quadrado4').style.display = "none";
    let titulo = document.querySelector('h1');
    titulo.innerText = 'Su!';

}