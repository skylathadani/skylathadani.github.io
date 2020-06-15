

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCard(card) {
    var a = document.getElementById(card).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{4})\)?[ ]?([0-9]{4})[ ]?([0-9]{4}[ ]?([0-9]{4}))$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}



// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("XXX-XXX-XXXX");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

   


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
    $("#phone").on("mouseenter", function(){
        $("#phone").addClass("showInput");
    });

    $("#phone").on("mouseleave", function(){
        $("#phone").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });

    $("#debit").on("change", function(){
        if (!validateCard("debit")){
            alert("Wrong format for credit card");
            $("#debit").val("XXXX XXXXX XXXXX XXXXX");
            $("#debit").addClass("error");
        }
        else {
            $("#debit").removeClass("error");
        }
    });


});