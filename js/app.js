// step 1:  Defining javascript functions
// function to add item
function addItem() {
    //alert("I've just activated the addItem() function");

    var itemValue = $('.add-item').val();

    //alert(itemValue);

    if (itemValue.length === 0) {
        alert('Please add something!!');
    }

    //if the input is valid
    else {
        var row = $('<li><button class="checkbox-button">✓</button><span class="list-checkbox">' + itemValue + '</span><button class="crossbox-button">x</button></li>');
    }

    //add each row to previous
    $('.buy-list').append(row);

    //empty the input box after submit by resetting the value
    $('.add-item').val('');

}
// function to check one item (already purchased)
function checkItem() {
    // alert("I've just activated the checkItem() function"); //
    $(this).parent().toggleClass('checkbox');
}

// function to delete one item
function deleteItem() {
    // alert("I've just activated the deleteItem() function"); //
    $(this).parent().remove();
}

// function to delete all the items (clear list)
function deleteAll() {
    // alert("I've just activated the delleteAll() function"); //
    $('.buy-list').empty();
}

// step 2:  Using javascript functions

$(document).ready(function () {
    /* on click on the .input-button activate function addItem() */
    $('.input-button').on('click', function () {
        addItem();
    });

    /* on click on the #clearall button activate function called deleteAll()*/
    $('#clearall').on('click', function () {
        deleteAll();
    });
});



/* on click on the .checkbox-button activate function called checkItem()*/
$(document).on('click', '.checkbox-button', checkItem);

/* on click on the .crossbox-button activate function called deleteItem()*/
$(document).on('click', '.crossbox-button', deleteItem);

// if after item is written in the text box and the return key is pressed, activate the addItem function
$(document).on('keypress', function (key) {
    if (key.keyCode == 13) {
        addItem();
    };
})
