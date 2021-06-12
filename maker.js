"use strict";
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
    let beginYear = $('#begin').val();
    let endYear = $('#end').val();

    if (beginYear == '' || endYear == '' ) {
        alert("Please put in a value");
    }

    else if (beginYear == endYear) {
        beginYear += ' Jan';
        endYear += ' Dec';
        $('body').css({'overflow': 'visible'});
        $('.init-window').hide();
        $(document).off('scroll');
        $('.begin-year').text(beginYear);
        $('.end-year').text(endYear);   
    }

    else {
    $('body').css({'overflow': 'visible'});
    $('.init-window').hide();
    $(document).off('scroll');
    $('.begin-year').text(beginYear);
    $('.end-year').text(endYear);   
    }
    
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