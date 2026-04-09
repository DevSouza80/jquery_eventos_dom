$(function(){

    validarCliqueHover();
    validarFormulario();

    // =========================
    // EVENTOS DE CLIQUE E HOVER
    // =========================
    function validarCliqueHover(){

        // Evento de clique
        $('.artigo1').click(function(){
            $('.artigo2').css('background-color', 'purple');
        });

        // Evento hover (entra e sai)
        $('.artigo1').hover(function(){
            $('.artigo2').css('background-color', 'red');
        }, function(){
            $('.artigo2').css('background-color', 'rgb(100,100,100)');
        });

    }

    // =========================
    // EVENTOS DE FORMULÁRIO
    // =========================
    function validarFormulario(){

        // Quando o campo recebe foco
        $('textarea').focus(function(){
            console.log("Textarea em foco");
        })

        // Quando perde o foco
        .blur(function(){
            console.log("Textarea perdeu o foco");
        });

        // Quando o select muda
        $('select').change(function(){
            console.log("Meu select foi alterado!");
        });

    }

});