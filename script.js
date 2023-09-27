function sortCardsValueLH(){
    // Get the card container element
    var cardContainer = document.getElementById("containertwo");

    // Get all the card elements within the container
    var cardElements = Array.from(cardContainer.getElementsByClassName("card"));

    // Sort the card elements based on their data-value attribute
    cardElements.sort(function (a, b) {
        var aValue = parseInt(a.getAttribute("data-value"));
        var bValue = parseInt(b.getAttribute("data-value"));
        return aValue - bValue;
    });

    // Remove all card elements from the container
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }

    // Append the sorted card elements back to the container
    cardElements.forEach(function (card) {
        cardContainer.appendChild(card);
    });

}

function sortCardsValueHL(){
    // Get the card container element
    var cardContainer = document.getElementById("containertwo");

    // Get all the card elements within the container
    var cardElements = Array.from(cardContainer.getElementsByClassName("card"));

    // Sort the card elements based on their data-value attribute
    cardElements.sort(function (a, b) {
        var aValue = parseInt(b.getAttribute("data-value"));
        var bValue = parseInt(a.getAttribute("data-value"));
        return aValue - bValue;
    });

    // Remove all card elements from the container
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }

    // Append the sorted card elements back to the container
    cardElements.forEach(function (card) {
        cardContainer.appendChild(card);
    });

}

function sortCardsDateON(){
    // Get the card container element
    var cardContainer = document.getElementById("containertwo");

    // Get all the card elements within the container
    var cardElements = Array.from(cardContainer.getElementsByClassName("card"));

    // Sort the card elements based on their data-value attribute
    cardElements.sort(function (a, b) {
        var aValue = parseInt(a.getAttribute("data-bytime"));
        var bValue = parseInt(b.getAttribute("data-bytime"));
        return aValue - bValue;
    });

    // Remove all card elements from the container
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }

    // Append the sorted card elements back to the container
    cardElements.forEach(function (card) {
        cardContainer.appendChild(card);
    });

}

function sortCardsDateNO(){
    // Get the card container element
    var cardContainer = document.getElementById("containertwo");

    // Get all the card elements within the container
    var cardElements = Array.from(cardContainer.getElementsByClassName("card"));

    // Sort the card elements based on their data-value attribute
    cardElements.sort(function (a, b) {
        var aValue = parseInt(b.getAttribute("data-bytime"));
        var bValue = parseInt(a.getAttribute("data-bytime"));
        return aValue - bValue;
    });

    // Remove all card elements from the container
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }

    // Append the sorted card elements back to the container
    cardElements.forEach(function (card) {
        cardContainer.appendChild(card);
    });

}




