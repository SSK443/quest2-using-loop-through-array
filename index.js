//Task;

//[id,name,price,stock]
 items = [
  [1, "hide and seek", 50, 20],
  [2, "lays", 20, 80],
  [3, "oreo", 40, 100],
  [4, "parleG", 25, 0],
  [5, "tiger", 20, 30],
  [6, "unibic", 60, 20],
  [7, "good day", 70, 20],
];

//1. display all product name
console.log(' display all product name');
let product= items.forEach(pr=>console.log(pr[1]))
console.log("-----------------");
//2. display product whose price < Rs.50
console.log('display product whose price < Rs.50');
console.log(`product whose price < Rs.50 = ${items.filter(price=>price[2]<50).forEach(r=>console.log(r[1]))}`)

console.log("-----------------");

//3. print price of oreo
console.log("price of oreo");
let price=items.find(ore=>ore[1]=="oreo")
console.log(`price of oreo:${price[2]}`)
console.log("-----------------");

//4. print costly product name
console.log('costly product name')
let costly=items.reduce((p1,p2)=>p1[2]>p2[2]?p1:p2)
console.log(`costly product name:${costly[1]}`)

console.log("-----------------");

//5. display out of stock product
console.log("display out of stock product")
let stock=items.find(nn=>nn[3]==0)
console.log(`out of stock product:${stock[1]}`)

console.log("-----------------");

//6. sort products based on sock in decsending order
console.log("sort products based on stock in decsending order");
items.sort((p1,p2)=>p2[3]-p1[3]).forEach(ff=>console.log(ff[1]))
console.log("-----------------");

//7. print product having maximum available stock
console.log('print product having maximum available stock')
let max=items.reduce((a1,a2)=>a1[3]>a2[3]?a1:a2)
console.log('maximum available stock:',max[1])

console.log("-----------------");

//8. is there any product can be purchased by Rs. 10
console.log('is there any product can be purchased by Rs. 10')
console.log(` can be purchased by Rs. 10:${items.some(py=>py[2]<=10)?'yes':'no'}`)


//9. Is there any product in the range of 10 to 30
console.log('Is there any product in the range of 10 to 30')
console.log(`any product in the range of 10 to 30:${items.some(pp=>pp[2]>=10&&pp[2]>=30)? 'yes':'no'}`)
console.log("-----------------");


//10. print all products in the range of 10 to 30
console.log("print all products in the range of 10 to 30");
let  range =items.filter(pp=>pp[2]>=10&&pp[2]<=30).forEach(pt=>console.log(pt[1]))
console.log("-----------------");
//11.print total stock of all product
console.log('print total stock of all product')
console.log(`total stock of all product:${items.map(v=>v[3]).reduce((b1,b2)=>b1+b2)}`)
