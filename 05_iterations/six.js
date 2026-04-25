// const coding = ["js", "java", "python", "cpp", "ruby"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6]

// let newNums = myNums.filter( (num) => num > 4) // works here

// let newNums = myNums.filter( (num) => {
//    num > 4
// }) // it wouldn't work here because its in scope of {} so we have to return

let newNums = myNums.filter( (num) => {
    return num > 4
})

console.log(newNums);

// If above using foreach:
const numbers = []

myNums.forEach( (num) => {
    if (num > 4){
        numbers.push(num)
    }
})

console.log(newNums);

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publishDate: 1981
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    publishDate: 1992
  },
  {
    title: "Book Three",
    genre: "History",
    publishDate: 1992
  },
  {
    title: "Book Four",
    genre: "Science",
    publishDate: 2004
  },
  {
    title: "Book Five",
    genre: "History",
    publishDate: 2008
  },
  {
    title: "Book Six",
    genre: "Science",
    publishDate: 2014
  },
  {
    title: "Book Seven",
    genre: "History",
    publishDate: 2015
  }
];

const userChoiceBook1 = books.filter( (bk) => bk.genre === 'History')

const userChoiceBook2 = books.filter( (bk) => { return bk.publishDate >= 2000 })

const userChoiceBook3 = books.filter( (bk) => { return bk.genre === 'History' && bk.publishDate >= 2000 })

console.log(userChoiceBook1)
console.log(userChoiceBook2)
console.log(userChoiceBook3)
