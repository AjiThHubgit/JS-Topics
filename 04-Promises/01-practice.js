const pr = new Promise(function (resolve, reject) {
    const user = {
        id: 25,
        name: "Ajith",
        age: 26
    };

    if (user.id === 24) {
        resolve("user present");
    } else {
        reject("user not found");
    }
});

pr.then(function (userStatus) {
    console.log(userStatus);
})
    .catch(function (err) {
        console.log(err);
    });
