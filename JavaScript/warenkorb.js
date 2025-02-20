const productDataBase = [["aple", 2,"0001"], ["watermelon", 5, "0002"], ["cocosnut", 4, "0003"], ["banana", 2, "0004"], ["orange", 1, "0005"], ["mango", 2, "0006"], ["pineaple", 7, "0007"], ["strawberry", 3, "0008"]];
const productDisplay = document.getElementById("product-display");
const cartButt = document.getElementById("cartButt")
let temporCart = [["PRODUCT NAME", "PRICE", "PRODUCT ID"]];



productDisplay.addEventListener("click", function(event) {

    if(event.target.tagName !== "BUTTON" && event.target.tagName !== "A") {
        // console.log("not the button or link for more info");

    } else if (event.target.tagName === "A") {
        // event.preventDefault();
        let linkId = event.target.id;
        // console.log("link wurde gedruckt mit id:_" + linkId);

    } else if (event.target.tagName === "BUTTON") {
        let buttonId = event.target.id;
        for (let i = 0; i < productDataBase.length; i++) {
            if (productDataBase[i][2] === buttonId) {
                temporCart.push(productDataBase[i])
                break;
            }
        }   
    }
});
cartButt.addEventListener("click", function() {
    console.table(temporCart);
    let totalPrice = 0;
    temporCart.shift(); // если эта не сделать сломается подсчет суммы т.к. прод имя цена и айди из букв а дальше будет подсчет из цифр
    for (let i = 0; i < temporCart.length; i++){    
        let productPrice = temporCart[i][1];
        totalPrice = totalPrice + productPrice;
    }
    console.log("TOTAL PRICE IS :   " + totalPrice);
    alert("CHECK CONSOLE LOG")
    temporCart = [["PRODUCT NAME", "PRICE", "PRODUCT ID"]];
    
});