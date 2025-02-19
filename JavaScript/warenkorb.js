const productDisplay = document.getElementById("product-display");

productDisplay.addEventListener("click", function(event) {

    if(event.target.tagName !== "BUTTON" && event.target.tagName !== "A") {
        console.log("not the button or link for more info");

    } else if (event.target.tagName === "A") {
        event.preventDefault();
        const linkId = event.target.id;
        console.log("link wurde gedruckt mit id:_" + linkId);

    } else if (event.target.tagName === "BUTTON") {
        const buttonId = event.target.id;
        console.log("button wurde gecklickt mit id_" + buttonId);
    }
});