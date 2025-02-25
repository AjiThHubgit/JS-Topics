const cart = ["shoes", "pants", "kurta"];
createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })

// producer

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        //  createOrder
        //  validateCard
        //  orderId
        if (!validateCard(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        //  logic for createOrder
        const orderId = "12345";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId)
            }, 5000)
        }
    });

    return pr;
}

function proceedToPayment() {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful")
    })
}

function validateCard(cart) {
    return true;
}