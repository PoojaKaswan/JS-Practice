const myNums = [1, 2, 3,]

const total = myNums.reduce( (acc, curr) =>{
    console.log(`acc: ${acc} and curr: ${curr}`);
    return acc + curr
}, 0)

console.log(total)
// const total = myNums.reduce( (acc, curr) => (acc + curr), 0)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }  
]

const totalPrice = shoppingCart.reduce((acc, item) => (acc + item.price), 0)

console.log(totalPrice)