//Promise
const fakeRequest = (url) => {
    return new Promise((resolve,reject) => {
        const delay = Math.floor(Math.random() * 4500 ) + 500
        setTimeout(() => {
            if(delay > 4000){
                reject("too bad connection timeout :'( ")
            }else{
                resolve(`Here is your fake data from ${url}`)
            }
        },delay)
    })
}

//first demo
// fakeRequest('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("It worked like butter!")
//     })
//     .catch(() => {
//         console.log("ERROR!!!")
//     })


//second demo (magic of promise)

// fakeRequest('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("Page 1 works")
//         console.log(data)
//         return fakeRequest('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("Page 2 works")
//         console.log(data)
//         return fakeRequest('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("Page 3 works")
//         console.log(data)
//     })
//     .catch((data) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(data)
//     })

//third demo

const delayedColor = (color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        },delay)
    })
}
const delay = 1000
delayedColor('lightblue',delay)
    .then(() => delayedColor('red',delay))           //implicit return
    .then(() => delayedColor('yellow',delay))
    .then(() => delayedColor('pink',delay))
    .then(() => delayedColor('indigo',delay))
    .then(() => delayedColor('violet',delay))