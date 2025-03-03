// question 2

let person = {}


 person.lastname = "Battula";

 person.firstname = "sairam";

 person.age = 22;



 delete person.age

 delete person.lastname

 console.log(person)



// question 3

let book = {
  title : "sai book",
  author : "sai"
}

// function has(obj, key){
//   return key in obj;
// }

// console.log(has(book, "title"))

for (let key in book) {
  if (key === "title"){
    console.log("true")
  }
}

