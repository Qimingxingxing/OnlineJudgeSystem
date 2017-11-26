var promise = new Promise((resolve, reject) => {
    resolve(1);
}).then(val => {
    return val;
});
promise.then(res => console.log(res));