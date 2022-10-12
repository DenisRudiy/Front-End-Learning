if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready()
{
    var removeCartItemButtons = document.getElementsByClassName('del_btn')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++)
    {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('C_C_count')
    for (var i = 0; i < quantityInputs.length; i++)
    {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('buy')
    {
        for (var i = 0; i < addToCartButtons.length; i++) {
            var button = addToCartButtons[i]
            button.addEventListener('click', addToCartClicked)
        }
    }
    document.getElementsByClassName('Purchase_btn')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('shop-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event)
{
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged (event)
{
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked (event) 
{
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('P_title')[0].innerText
    var price = shopItem.getElementsByClassName('P_Price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('P_img')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}


function addItemToCart(title, price, imageSrc)
{
    var cartRow = document.createElement('div')
    cartRow.classList.add('shop-item')
    var cartItems = document.getElementsByClassName('shop-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('C_name')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `<div class="C_title">
                                <img src="${imageSrc}">
                                <p class="C_name">${title}</p>
                            </div>

                            <div class="C_count">
                                <p>Total: </p>
                                <input type="number" class="C_C_count" value="1">
                            </div>

                            <div class="P_del">
                                <h2 class="P_price">${price}</h2>
                                <button class="del_btn">Delete</button>
                            </div>

                            <div class="Cline"></div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('del_btn')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('C_C_count')[0].addEventListener('change', quantityChanged)

}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('shop-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('shop-item')
    var total = 0
    for (var i = 0; i < cartRows.length; i++)
    {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('P_price')[0]
        var quantityElement = cartRow.getElementsByClassName('C_C_count')[0]
        var price = parseFloat(priceElement.innerText.replace('kg', ''))
        var quantity = parseInt(quantityElement.value)
        total = total + (price*quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('C_total_price')[0].innerText = total + 'kg'
}
