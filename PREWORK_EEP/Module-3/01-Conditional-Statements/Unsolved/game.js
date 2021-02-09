// meat function
var meat = function() {

    // Alerting vegans about your meat questions
    window.alert("If you are a vegan, get ready!");

    //asking question if person likes meat or not
    var promptMeatQ = window.prompt('Do you eat meat, YES or NO? Enter YES or NO to choose.');

    // if player chooses meat
if (promptMeatQ === "YES") {
    window.alert("Here's a cheeseburger!");
    }
    else (promptMeatQ === "NO") {
        window.alert("Here's a veggie burger!");
    }

}

meat();