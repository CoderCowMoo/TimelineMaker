function onLoadFunction() {
    // Here anything that needs to be done on load is done
    $('body').css({'overflow':'hidden'});
    $(document).on('scroll',function () { 
         window.scrollTo(0,0); 
    });
}

function createNewElement(text, time) {
    // This function handles the creation of a new timeline event
}

function takeInput() {
    // Called when the user had inputted the time
    // and text for the next timeline element
    $('body').css({'overflow': 'hidden'})
    $(document).off('scroll')
    $('#begin')
}

function deleteElement(elementID) {
    /*
      Given the element id, this function will remove the function
    */
}       

function saveEdits() {
    /*
    
    */
}

$(document).ready( function() {
    $('body').on
});