$(document).ready(function(){
    $("#submitBtn").click(function(e){
        var text = $("#message").val();
        $("#show").html(text);
        e.preventDefault();
    });
    
});

