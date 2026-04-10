$(function(){

    // comentario de uma linha
    /*comentario multi-linha */
    //uma variavel é um potinho//

    //ENTRADA

    var botoes = $ (".botao");
    var titulo = $ ("h1");
    var subtitulo = $ ("#subtitulo");
    var icones = $ ("svg");
    var fundo = $ ("body");
    var botao_modoEscuro = $ ("#modoEscuro")

    var modoEscuro = false


    //PROCESSAMENTO

    botao_modoEscuro.click(()=>{

        if (modoEscuro == false){

            botoes.css ("background-color", "black");
            botoes.css ("color", "rgb(238, 177, 84)");

          
            fundo.css("background-image", "url('https://i.pinimg.com/1200x/18/f1/e9/18f1e918d531d4bfa864ea026bf6c876.jpg')");


            titulo.css ("color", "rgb(238, 177, 84)");
            subtitulo.css ("color", "rgb(238, 177, 84)");
            icones.css ("fill", "rgb(238, 177, 84)");
            

            modoEscuro = true;


        }else{

            botoes.css ("background-color", "rgb(238, 177, 84)");
            botoes.css ("color", "black");


            fundo.css ("background-image", "url('../recursos/img/jasmins.png')");

            
            titulo.css ("color", "black");
            subtitulo.css ("color", "black");
            icones.css ("fill", "black");
           

            modoEscuro = false;

        }


    });
    



    //SAIDA


});