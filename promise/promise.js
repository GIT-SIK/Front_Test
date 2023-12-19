// promise_1
function promise_1() {
    console.log("-- Promise 1 --");
    const promise = () => new Promise((resolve, reject) => {
        let x = 1 + 1;
        if (x == 3) {
            resolve('success');
        } else {
            reject('failed');
        }
    });
    promise().then((message) => {
        console.log("message : " + message);
    }, (error) => {
        console.log("message : " + error);
    });
}

// promise_2 (resolve)
function promise_2() {
    console.log("-- Promise 2 (resolve) --");
    function promise_t1() {
        return new Promise(function (resolve, reject) {
            let num = 10;
            resolve(num);
        });
    }

    promise_t1().then(function (returnResolved) {
        console.log(returnResolved);
    });
}

// promise_3 (reject)
function promise_3() {
    console.log("-- Promise 3 (reject) --");
    function promise_t1() {
        return new Promise(function (resolve, reject) {
            reject(new Error("failed"));
        });
    }

    promise_t1().then().catch(function (e) {
        console.log(e);
    });
}

// promise_4 (다수 promise)
function promise_4() {
    console.log("-- Promise 4 (다수) --");
    new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(0);
        }, 1000);
    })
        .then(function (result) {
            console.log(result); // 0
            return result + 10;
        })
        .then(function (result) {
            console.log(result); // 10
            return result + 10;
        })
        .then(function (result) {
            console.log(result); // 20
        });

}