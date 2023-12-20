function _clear() {
    console.clear();
}

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

// promise_4 (promise return)
function promise_4() {
    console.log("-- Promise 4 (promise return) --");
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

/* callback : promise 차이점 */
function promise_5() {
    function promise_add(a) {
        return new Promise(resolve => setTimeout(() => resolve(a + 15), 100));
    }

    promise_add(15)
        .then(promise_add)
        .then(promise_add)
        .then(console.log);
}

function callback_5() {
    function add(a, callback) {
        setTimeout(() => callback(a + 15), 100);
    }


    add(15, res => {
        add(res, res => {
            add(res, res => {
                console.log(res);
            });
        });
    });

}

/* Promise 병렬 처리 */
function promise_parallel() {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'a');
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'b');
    });

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'c');
    });

    Promise.all([promise1, promise2, promise3]).then((val) => {
        console.log(val);
    })

}