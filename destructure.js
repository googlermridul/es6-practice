const person = {name: "william johnson", age: 17, job: "facebooking", gfName: "ema watson", address: "kochu khet", phone: 01715895029, friends: ["abul", "kabul","osman"]}


// const gfName = person.gfName;
// const phone = person.phone;

// const {phone, gfName, address, salary} = person;

// console.log(phone, address, salary);


const friends = ["sakib khan", "salman khan", "shahrookh khan", "aamir khan"];
const [choto, boro, ...remaining] = friends;

// console.log(choto, boro, remaining);


const complexObj = {
   name: "kolimUddin",
   info: {
      address: "kola bagan",
      leader: "din the day"
 
   }
}
const {leader} = {
   address: "kola bagan",
   leader: "din the day"

}
console.log(complexObj);
