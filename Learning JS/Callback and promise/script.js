//Promise
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500
        setTimeout(() => {
            if (delay > 4000) {
                reject("too bad connection timeout :'( ")
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
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

const delayedColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(delay>=1000){
                document.body.style.backgroundColor = color;
                resolve('success')
            }else{
                reject('connection timeout sorry :(')
            }
        }, delay)
    })
}
const delay = 1000
// delayedColor('lightblue',delay)
//     .then(() => delayedColor('red',delay))           //implicit return
//     .then(() => delayedColor('yellow',delay))
//     .then(() => delayedColor('pink',delay))
//     .then(() => delayedColor('indigo',delay))
//     .then(() => delayedColor('violet',delay))

const rainbow = async () => {
    await delayedColor('red', delay)
    await delayedColor('orange', delay)
    await delayedColor('yellow', delay)
    await delayedColor('green', delay)
    await delayedColor('blue', delay)
    await delayedColor('indigo', delay)
    await delayedColor('violet', delay)
}

async function printRainbow(){
    let res = await rainbow()
    console.log('oke')
}

async function makeTwoRequest(){
    try{
        let data1 = await fakeRequest('\page1')
        console.log(data1)
        let data2 = await fakeRequest('\page2')
        console.log(data2)
    }catch (e) {
        console.log(`Catch an error: ${e}`)
    }
}

makeTwoRequest()