// DEFINE FUNCTIONS:

// function to add items and check the validity of input by the user
function addItem() {

    var itemValue = $('.add-item').val();

    if (itemValue.length == 0) {
        alert("Please add something!");
    } else {
        // function to add items in the list
        $('.buy-list').append("<li class='list'>" + itemValue + "</li>");
    }
    // clear the add-item text box after item is added to the list
    $('.add-item').val("");
}

// function to delete items from the list
function deleteItem() {
    $('.list-contents').remove();
}

// function to check items off from the list
function checkItem() {
    $('')
}

// function to delete all items in the list
function clearAll() {
    location.reload();
}

// USE/CALL FUNCTIONS:

$(document).ready(function () {
    // when ADD button is clicked, run addItem function
    $('.input-button').on("click", function () {
        addItem();
    });

    // when crossbox-button is clicked, run deleteItem function
    $('.crossbox-button').on("click", function () {
        deleteItem();
    });

    // when checkbox-button is clicked, run checkItem function
    $('.checkbox-button').on("click", function () {
        checkItem();
    });

    // when CLEAR ALL button is click, run clearAll function
    $('#clearall').on("click", function () {
        clearAll();
    })
})
