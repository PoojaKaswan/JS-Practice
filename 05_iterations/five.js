// for each loop

const coding = ["js", "java", "python", "cpp", "ruby"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

coding.forEach( (item) => {
    // console.log(item);
});

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe) //Referencing here not executing like: coding.forEach(printMe())

coding.forEach( (item, index, array) => {
    // console.log(item, index, array)
})

const myCoding = [
    {
        languageName: "java",
       fileName: "java" 
    },
    {
        languageName: "javascript",
       fileName: "js" 
    },
]

myCoding.forEach( (val) => {
    console.log(val);
    console.log(val.languageName)
})
