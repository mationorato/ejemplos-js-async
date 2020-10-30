const asyncFor = (array, cb) => {
    array.forEach((i) => {
        setTimeout(() => cb(i), Math.random() * 1000);
    });
}


asyncFor([1,2,3,4], i => console.log(i))
asyncFor(['a','b','c','d'], i => console.log(i))

