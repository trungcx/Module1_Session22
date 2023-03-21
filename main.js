function Item(name, price, id) {
    this.name = name;
    this.price = price;
    this.id = id;
    this.amount = 0;
}

let pencil = new Item('Pencil', 5, 202301);
let bag = new Item('Bag', 200, 202302);
let ruler = new Item('Ruler', 10, 202303);
let eraser = new Item('Eraser', 7, 202304);

let itemList = [pencil, bag, ruler, eraser]
let buyList = [];

const cartIcon = document.getElementById('cart');
cartIcon.addEventListener('click', jumpToCartPage)
//Save to localStorage
localStorage.setItem('itemList', JSON.stringify(itemList));

//MAIN - Display items
displayItems();
function displayItems() {
    let result = `
             <tr>
                <td>No</td>
                <td>Tên sp</td>
                <td>Đơn giá ($)</td>
                <td></td>
            </tr>
                    `
    itemList = JSON.parse(localStorage.getItem('itemList'));
    for (let i = 0; i < itemList.length; i++) {
        result += `
            <tr>
                <td>${i + 1}</td>
                <td class="itemImageAndName">
                    <img class="itemImage" src="./image/${i + 1}.jfif" alt=""> 
                    <label for="">${itemList[i].name}</label>
                </td>
                <td>${itemList[i].price}</td>
                <td><input id="buyButton${i}" class="buyButton" onclick="buyButton_fnt(${i})" type="button" value="Buy"></td>
                
            </tr>
                    `
    }
    document.getElementById('itemTable').innerHTML = result;
}
//Buy button - Add to cart
function buyButton_fnt(index) {
    itemList = JSON.parse(localStorage.getItem('itemList'));
    buyList = JSON.parse(localStorage.getItem('buyList'));
    if (buyList == null) {
        buyList = [];
    }
    let itemExistFlag = false;
    for (let i in buyList) {
        if (buyList[i].id == itemList[index].id) {
            buyList[i].amount++;
            itemExistFlag = true;
            break;
        }
    }
    if (itemExistFlag == false || buyList[0] == null) {
        buyList.push(itemList[index]);
        buyList[buyList.length - 1].amount++;
    }
    localStorage.setItem('buyList', JSON.stringify(buyList));
}
//Jump to cart page
function jumpToCartPage() {
    window.location.href = './cart.html';
}
function test() {
    console.log(buyList[0].amount);
}