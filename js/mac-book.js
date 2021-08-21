function getIdAndValue(numId, num) {
    const getCostId = document.getElementById(numId);
    getCostId.innerText = num;
    totalPrice() // Call the function of total price
}

//----------------------------<<< Total Price >>>----------------------------//
function totalPrice() {
    const getMemoryCost = document.getElementById('ex-memory-cost');
    const memoryCost = parseFloat(getMemoryCost.innerText);

    const getStorageCost = document.getElementById('ex-storage-cost');
    const storageCost = parseFloat(getStorageCost.innerText);

    const getDeliveryCost = document.getElementById('delivery-cost');
    const deliveryCost = parseFloat(getDeliveryCost.innerText);

    const getTotalPrice = document.getElementById('total-price');
    const netPrice = memoryCost + storageCost + deliveryCost + 1299;
    getTotalPrice.innerText = netPrice;  //total

    const getPromoTotalPrice = document.getElementById('promo-total-price');
    getPromoTotalPrice.innerText = netPrice;
}

//----------------------------<<< Memory >>>----------------------------//
document.getElementById('8gb-memory-btn').addEventListener('click', function () {
    const getExMemoryCost = getIdAndValue('ex-memory-cost', 0)
});
document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    const get16GbExMemoryCost = getIdAndValue('ex-memory-cost', 180)
})

//----------------------------<<< Storage >>>----------------------------//
document.getElementById('256gb-storage-btn').addEventListener('click', function () {
    const getStorageCost = getIdAndValue('ex-storage-cost', 0)
})
document.getElementById('512gb-storage-btn').addEventListener('click', function () {
    const get512gbStorageCost = getIdAndValue('ex-storage-cost', 100)
})
document.getElementById('1tb-storage-btn').addEventListener('click', function () {
    const get1TbStorageCost = getIdAndValue('ex-storage-cost', 180)
})

//----------------------------<<< Delivery Charge >>>----------------------------//
document.getElementById('dly-25-btn').addEventListener('click', function () {
    const getDeliveryCost = getIdAndValue('delivery-cost', 0);
})
document.getElementById('dly-21-btn').addEventListener('click', function () {
    const get21AugDeliveryCost = getIdAndValue('delivery-cost', 20);
})

//----------------------------<<< Promo code >>>----------------------------//
document.getElementById('apply-btn').addEventListener('click', function () {
    const getPromoCodeInput = document.getElementById('promo-code-input');
    const promoCodeValue = getPromoCodeInput.value;
    if (promoCodeValue == 'stevekaku') {
        const getTotalPrice = document.getElementById('total-price');
        const parseTotalPrice = parseFloat(getTotalPrice.innerText);

        const get20PerPromo = (parseTotalPrice / 100) * 20;
        const promoTotal = parseTotalPrice - get20PerPromo;

        const getPromoTotalPrice = document.getElementById('promo-total-price');
        getPromoTotalPrice.innerText = promoTotal;
        document.getElementById('apply-btn').setAttribute('disabled', true);
    }
    else {
        alert('Your promo code dose not match')
    }
})






