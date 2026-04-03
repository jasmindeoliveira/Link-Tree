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
            botoes.css ("color", "rgb(116, 241, 158)");

            modoEscuro = true;

        }else{

            botoes.css ("background-color", "rgb(116, 241, 158)");
            botoes.css ("color", "black");

            modoEscuro = false;

        }

    });
    



    //SAIDA


});