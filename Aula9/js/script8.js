function pausa(x) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            return resolve(x)
        }, 2000);
    });
}

async function teste1(x) {
    let a = await pausa(10);
    let b = await pausa(20);
    console.log(x + a + b);
}

teste1(10);


