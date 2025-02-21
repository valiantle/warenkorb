const productDataBase = [["aple", 2,"0001"], ["watermelon", 5, "0002"], ["cocosnut", 4, "0003"], ["banana", 2, "0004"], ["orange", 1, "0005"], ["mango", 2, "0006"], ["pineaple", 7, "0007"], ["strawberry", 3, "0008"]];
const productDisplay = document.getElementById("product-display");
const cartButt = document.getElementById("cartButt");
// const body = document.getElementById("bodyId")
const cartMenu = document.getElementById("cartMenu");
const checkOut = document.getElementById("checkOut");
let temporCart = [];

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
cartButt.addEventListener("click", function(event) {
    event.stopPropagation() // крч так как два условия в двух разных обработчиках клика на 1 из них приходится ставить ограничение распространения т.к. по итогу кликая на кнопку создания элемента я одновременно вызываю и его создание и его закрытие
    if (cartMenu.style.display === "flex") {
        return;
    } else if (temporCart.length > 0) {
        let totalPrice = 0;
        for (let i = 0; i < temporCart.length; i++) {
            totalPrice = totalPrice + temporCart[i][1];
        }
        document.getElementById("summary").innerText = "Summary : " + totalPrice;
    }

    console.table(temporCart);
  
    // temporCart.shift(); // если эта не сделать сломается подсчет суммы т.к. прод имя цена и айди из букв а дальше будет подсчет из цифр
    
    cartMenu.style.display = "flex"
    cartMenu.style.flexDirection = "column"
    cartMenu.style.alignItems = "center"
    cartMenu.style.justifyContent = "space-between"

    const ul = document.getElementById("corbList");
    temporCart.forEach(function(item){
        const li = document.createElement("li");
        li.textContent = `${item[0]} - ${item[1]}euro`;;
        ul.appendChild(li);    
    });
    
});


document.body.addEventListener("click", function(event) {
    // event.stopPropagation()
    if (event.target !== cartMenu) {
        cartMenu.style.display = "none"
        const ul = document.getElementById("corbList")
        ul.innerHTML = '';
    }

});

checkOut.addEventListener("click", function() {
    temporCart = [];
    totalPrice = 0;
    const ul = document.getElementById("corbList")
    ul.innerHTML = '';
    document.getElementById("summary").innerText = "";
});
