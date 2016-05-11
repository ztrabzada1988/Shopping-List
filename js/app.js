// step 1:  Defining javascript functions
// function to add item
function addItem() {
    alert("I've just activated the addItem() function");

    var itemValue = $('.input').val();

    alert(itemValue);




}
// function to check one item (already purchased)
function checkItem() {
    alert("I've just activated the checkItem() function");
    $(this).parent().toggleClass('checkbox');
}

// function to delete one item
function deleteItem() {
    alert("I've just activated the deleteItem() function");
    $(this).parent().remove();
}

// function to delete all the items (clear list)
function delleteAll() {
    alert("I've just activated the delleteAll() function");
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
        delleteAll();
    });
});



/* on click on the .checkbox-button activate function called checkItem()*/
$(document).on('click', '.checkbox-button', checkItem);

/* on click on the .crossbox-button activate function called deleteItem()*/
$(document).on('click', '.crossbox-button', deleteItem);
