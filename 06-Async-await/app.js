const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise Resolved Succussfully....!!!!");
    }, 3000)
});

function promiseFunc() {
    p.then(function (res) {
        console.log(res);
        return res;
    })
    console.log("After the promise function....!");
}

promiseFunc();

async function awaitFunct() {
    const res = await p;
    console.log(res);
    console.log("After the promise ....!");
}

awaitFunct();