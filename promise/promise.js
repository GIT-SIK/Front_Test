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

// promise_2 
function promise_2() {
    console.log("-- Promise 2 --");
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

// promise_3 
function promise_3() {
}