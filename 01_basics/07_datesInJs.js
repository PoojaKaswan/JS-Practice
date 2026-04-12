// Dates

let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOStrin);
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate1 = new Date(2023, 0, 23)
console.log(myCreatedDate1.toDateString());

let myCreatedDate2 = new Date("2023-01-23")
console.log(myCreatedDate2.toLocaleDateString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//Month starts with 0
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

console.log(newDate.toLocaleString('default', {
    weekday: "narrow",
}));