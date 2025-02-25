const productDataBase = [["aple", 2,"0001"], ["watermelon", 5, "0002"], ["cocosnut", 4, "0003"], ["banana", 2, "0004"], ["orange", 1, "0005"], ["mango", 2, "0006"], ["pineaple", 7, "0007"], ["strawberry", 3, "0008"]];
const productDisplay = document.getElementById("product-display");
const cartButt = document.getElementById("cartButt");
// const body = document.getElementById("bodyId")
const cartMenu = document.getElementById("cartMenu");
const checkOut = document.getElementById("checkOut");
const ul = document.getElementById("corbList");

let temporCart = [];

                                                                                     // добавление товаров в корзину
productDisplay.addEventListener("click", function(event) {
    if (event.target.tagName !== "BUTTON" && event.target.tagName !== "A") {
        // console.log("not the button or link for more info");
    } else if (event.target.tagName === "A") {
        // event.preventDefault();
        let linkId = event.target.id;
        // console.log("link wurde gedruckt mit id:_" + linkId);
    } else if (event.target.tagName === "BUTTON") {
        let buttonId = event.target.id;
        for (let i = 0; i < productDataBase.length; i++) {
            if (productDataBase[i][2] === buttonId) {
                temporCart.push(productDataBase[i]);
                break;
            }
        }
    }
});

                                                                            // открытие корзины
cartButt.addEventListener("click", function(event) {
    event.stopPropagation(); // крч так как два условия в двух разных обработчиках клика на 1 из них приходится ставить ограничение распространения т.к. по итогу кликая на кнопку создания элемента я одновременно вызываю и его создание и его закрытие
    if (cartMenu.style.display === "flex") {
        return;
    }
    console.table(temporCart);
    // temporCart.shift(); // если эта не сделать сломается подсчет суммы т.к. прод имя цена и айди из букв а дальше будет подсчет из цифр

    ul.innerHTML = "";

                                                                     // добавляем элементы из temporCart в ul
    temporCart.forEach(function(item) {
        const li = document.createElement("li");
        li.setAttribute("data-id", item[2]);
        li.textContent = `${item[0]} - ${item[1]} euro`;

        const delButton = document.createElement("button");
        delButton.setAttribute("data-id", item[2]);
        delButton.textContent = "Delete";

        li.appendChild(delButton);
        ul.appendChild(li);
    });

                                                                                // показываем корзину
    cartMenu.style.display = "flex";
    cartMenu.style.flexDirection = "column";
    cartMenu.style.alignItems = "center";
    cartMenu.style.justifyContent = "space-between";

                                                                             // обновляем общую сумму
    totPriceUpdt();
});

                                                                                // удаление товаров из корзины
ul.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        // event.stopPropagation()
        let butId = event.target.dataset.id;
        for (let i = 0; i < temporCart.length; i++) {
            if (temporCart[i][2] === butId) {
                temporCart.splice(i, 1);
                event.target.parentElement.remove();
                totPriceUpdt();
                break;
            }
        }
    }
});

                                                                                // функция для расчета общей суммы
function totPriceCalc() {
    let totalPrice = 0;
    for (let i = 0; i < temporCart.length; i++) {
        totalPrice = totalPrice + temporCart[i][1];
    }
    return totalPrice;
}

                                                                               //функция для обновления общей суммы
function totPriceUpdt() {
    let totalPrice = totPriceCalc();
    document.getElementById("summary").innerText = "Summary : " + totalPrice;
}

                                                                            // Закрытие корзины при клике вне ее области
document.body.addEventListener("click", function(event) {
    // event.stopPropagation()
    if (event.target.dataset.id !== undefined) {
        cartMenu.style.display = "flex";
    } else if (event.target !== cartMenu && !cartMenu.contains(event.target)) {
        cartMenu.style.display = "none";
        const ul = document.getElementById("corbList");
        ul.innerHTML = "";
    }
});