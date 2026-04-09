// Executa quando o documento estiver pronto
$(function () {

    // Variável para controlar o timeout
    var timer;

    // Evento de SCROLL
    $(window).scroll(function () {
        // Executa quando o usuário rola a página
        console.log("Scroll detectado!");
    });

    // Evento de RESIZE
    $(window).resize(function () {
        console.log("Tela redimensionada!");

        // Limpa o timeout anterior (evita múltiplos disparos)
        clearTimeout(timer);

        // Cria um novo timeout
        timer = setTimeout(function () {
            // Redireciona após 1 segundo
            location.href = "http://localhost/Curso%20WebMaster/JQuery/";
        }, 1000);
    });

    // Evento de clique em LINKS
    $('a').click(function (e) {
        // Impede comportamento padrão do link
        // e.preventDefault();

        // Outra forma de impedir comportamento padrão
        // return false;
    });

    // Evento de clique na DIV .box
    $('.box').click(function (e) {
        // Impede que o clique "suba" para o body
        e.stopPropagation();
    });

    // Evento de clique no BODY
    $('body').click(function () {
        // Altera a cor da .box
        $('.box').css('background-color', 'green');
    });

});
