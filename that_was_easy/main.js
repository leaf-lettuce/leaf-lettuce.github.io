function sayThatWasEasy() {
    var ThatWasEasy = new Audio("that_was_easy.mp3");
    ThatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);

$(document). delegateKeypress(event) 
    
    if (event.charCode == 32) {
      $("#easy").trigger("click");
    }