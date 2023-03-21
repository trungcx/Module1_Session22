//Display items in cart
displayCartItems();
function displayCartItems() {
    buyList = JSON.parse(localStorage.getItem('buyList'));
    let total = 0;
    let result = `
    <tr>
       <td>No</td>
       <td>Tên sp</td>
       <td>Đơn giá ($)</td>
       <td>Số lượng</td>
       <td>Thành tiền ($)</td>
   </tr>
           `
    for (let i = 0; i < buyList.length; i++) {
        total += buyList[i].price*buyList[i].amount;
        result += `
                <tr>
                    <td>${i+1}</td>
                    <td>${buyList[i].name}</td>
                    <td>${buyList[i].price}</td>
                    <td>
                    <input class="amountChangeBtn" type="button" onclick="decreaseAmount(${i})" value="-">
                    <p style="display: inline-block;">${buyList[i].amount}</p>
                    <input class="amountChangeBtn" type="button" onclick="increaseAmount(${i})" value="+">
                    </td>
                    <td>${buyList[i].price*buyList[i].amount}</td>
                </tr>
                    `
    }
    document.getElementById('cartItem').innerHTML = result;
    document.getElementById('totalDisplayMoney').innerText = total + ' $';
}
//Change amount of item function
function decreaseAmount (index){
    if(buyList[index].amount > 1){
        buyList[index].amount--;
    } else{
        buyList.splice(index,1);
    }
    localStorage.setItem('buyList',JSON.stringify(buyList));
    displayCartItems();
}
function increaseAmount (index){
    buyList[index].amount++;
    localStorage.setItem('buyList',JSON.stringify(buyList));
    displayCartItems();
}