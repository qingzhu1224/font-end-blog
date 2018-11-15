function sleep() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('finish');
            resolve('sleep');
        }, 2000)
    })
}
async function test() {
    let value = await sleep();
    console.log("object");
}

test() // finish object



var a = 0
var b = async () => {
  a = a + await 10
  console.log('2', a) // -> '2' 10
  a = (await 10) + a
  console.log('3', a) // -> '3' 20
}
b()
a++
console.log('1', a) // -> '1' 1