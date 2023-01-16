var questoes = [
    {
        //matilda
        opcoes: ["Matilda", "Cinderela", "Menina Veneno", "Carrossel"],
        correta: 1,
        imagemSrc: "filme1.gif"
    },
    {
        //a pequena sereia
        opcoes: ["Tubarão", "A Pequena Sereia", "A Lula Gigante", "Branca de Neve"],
        correta: 2,
        imagemSrc: "filme2.jpeg"
    },
    {
        //enrolados
        opcoes: ["Cinderela", "Rapunzel", "A Bela Adormecida", "Enrolados"],
        correta: 4,
        imagemSrc: "filme3.webp"
    },
    {
        //meninas malvadas
        opcoes: ["Meninas Malvadas", "Meninas Malvadas 2", "As apimentadas", "Ela é Demais"],
        correta: 1,
        imagemSrc: "filme4.gif"
    },
    {
        //harry potter e o prisioneiro de askaban 
        opcoes: ["Harry Potter e a Pedra Filosofal", "Harry Potter e o Enigma do Príncipe", "Harry Potter e a Câmara Secreta", "Harry Potter e o Prisioneiro de Azkaban"],
        correta: 4,
        imagemSrc: "filme5.jpg"
    },
    {
        //percy jackson e o ladrao de raios
        opcoes: ["As Crônicas de Nárnia", "Percy Jackson e o Mar de Monstros", "Harry Potter e a Ordem da Fenix", "Percy Jackson e o Ladrão de Raios"],
        correta: 4,
        imagemSrc: "filme6.jpg"
    },
    {
        //titanic
        opcoes: ["Titanic", "Velha Guarda", "Diário de uma Princesa", "Ghost"],
        correta: 1,
        imagemSrc: "filme7.webp"
    },
    {
        //clube da luta
        opcoes: ["Matrix", "Clube da Luta", "Entrevista com um Vampiro", "A Origem"],
        correta: 2,
        imagemSrc: "filme8.gif"
    },
    {
        //ghost
        opcoes: ["A Morte de da Parabéns", "Uma Linda Mulher", "Ghost", "Comer, Rezar, Amar"],
        correta: 3,
        imagemSrc: "filme9.webp"
    },
    {
        //nasce uma estrela
        opcoes: ["Parasita", "A Forma da Água", "Titanic", "Nasce Uma Estrela"],
        correta: 4,
        imagemSrc: "filme10.webp"
    }
]

var resultadoBox = [
    {
        imagemResultado: "result1.gif",
        textoResultado: "Que pena, o seu resultado não foi tão bom. Já está na hora de assistir mais filmes!"
    },
    {
        imagemResultado: "result2.gif",
        textoResultado: "Quase lá, o resultado não foi dos melhores. Assista mais filmes e tente novamente."
    },
    {
        imagemResultado: "result3.gif",
        textoResultado: "Parabéns! Você realmente entende de filmes, um verdadeiro cinéfilo, continue assim! ; )"
    },
]

var questao = 0;
var op = [];
var pontuacao = 0;

setAnswersStart();

function setAnswersStart() {
    if(questao < questoes.length) {
        document.getElementById("1").innerHTML = questoes[questao].opcoes[0];
        document.getElementById("2").innerHTML = questoes[questao].opcoes[1];
        document.getElementById("3").innerHTML = questoes[questao].opcoes[2];
        document.getElementById("4").innerHTML = questoes[questao].opcoes[3];
        document.getElementById("imagem").src = `imgs/${questoes[questao].imagemSrc}`;
        
        questao++;
    }
    else{
        for(var i = 0; i < questoes.length; i++) {
            if(questoes[i].correta === parseInt(op[i])){
                pontuacao++;
            }
        }
        document.getElementById("conteudo").style = "display: none"
        document.getElementById("resultado").style = "display: flex"
    }

    if(pontuacao < 5) {
        document.getElementById("imgResultado").src = `imgs/${resultadoBox[0].imagemResultado}`;
        document.getElementById("pontuacaoFinal").innerHTML = pontuacao+"/10";
        document.getElementById("txtResultado").innerHTML = resultadoBox[0].textoResultado;
    }
    else if(pontuacao < 8) {
        document.getElementById("imgResultado").src = `imgs/${resultadoBox[1].imagemResultado}`;
        document.getElementById("pontuacaoFinal").innerHTML = pontuacao+"/10";
        document.getElementById("txtResultado").innerHTML = resultadoBox[1].textoResultado;
    }
    else {
        document.getElementById("imgResultado").src = `imgs/${resultadoBox[2].imagemResultado}`;
        document.getElementById("pontuacaoFinal").innerHTML = pontuacao+"/10";
        document.getElementById("txtResultado").innerHTML = resultadoBox[2].textoResultado;
    }
}

function selecionarOpcao(e) {
    op.push(e.id);
    setAnswersStart();
}

function jogarNovamente() {
    window.location.reload();
}

// function resultadoFinal() {
//     if(pontuacao < 5) {
//         document.getElementById("imgResultado").src = `imgs/${resultadoBox[0].imagemResultado}`;
//         document.getElementById("txtResultado").innerHTML = resultadoBox[0].textoResultado;
//     }
//     else if(pontuacao < 8) {
//         document.getElementById("imgResultado").src = `imgs/${resultadoBox[1].imagemResultado}`;
//         document.getElementById("txtResultado").innerHTML = resultadoBox[1].textoResultado;
//     }
//     else {
//         document.getElementById("imgResultado").src = `imgs/${resultadoBox[2].imagemResultado}`;
//         document.getElementById("txtResultado").innerHTML = resultadoBox[2].textoResultado;
//     }
// }
