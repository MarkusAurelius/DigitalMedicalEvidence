captureCases = {
    
    
    init: async function() {
        return captureCases.bindEvents();
    },


bindEvents: function() {
    $(document).on('click', '.btn-submit', captureCases.handleSubmit);
},


handleSubmit: function() {
    
    $("#success").text("Anlage des Falles und Versand der Nachricht erfolgreich!");

    },
};

$(function() {
    $(window).load(function() {
      captureCases.init();
    });
});