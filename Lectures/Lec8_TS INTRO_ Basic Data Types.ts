// * Introduction in TypeScript 
// ▪ TypeScript compilation and code execution 
// ▪ Basic data types
// ▪ Function typing
// ▪ Object typing
// ▪ Array typing
// ▪ Tuples
// ▪ Enum
// ▪ Union
// ▪ Type Narrowing
// ▪ Types alias



let user: any = 1; // бажано уникати тип any
user = "string";
user = true;

///
function sum(a, b) { // Parameter 'a' implicitly has an 'any' type.
    console.log(a + b);
}
///
function sum2(a: number, b: number) { 
    console.log(a + b);
}
///
function sum(a:number,b:number):number{
    console.log(a+b);
    return a+b
}
sum(4,5);


/// VOID - немає значення що повертається // dom операції
function showData (data: string): void{
    console.log(`Current info ${data}`)
}
 // NEVER  - нічого не виконується призначається і виконується
    // в нас є функція createError яка приймає параметр меседж типу стрінг і результат роботи функції типізуєтья типом невер , це те що 
   // вертає наша функція
   // коли функція генерує ексепшин
 function createError(message: string): never {
    throw new Error(message);
   }
   createError("error");
// результат:
// [ERR]: "Executed JavaScript Failed:" 
// [ERR]: error 
function loop(): never {
    while (true) {}
   }
   

   // OBJECTS 

   let address : {street: string, home: number} = {
    street: "soborna",
    home:4 
   }
   address.home = 10;

   // ARRAY  - масив 
   const ages: number[] = [4,5,4,6];
   const week: string[] = ["wed", "sat", "sunday"]
   //якщо масив протипізований ми не моєжемо записувати в нього значення іншого  типу

   // destructuring
const cities: string[] = ["Lviv", "Rivne", "Kyiv", "Dnipro"]; // filter by length >4
const citiesData = cities.filter((city) =>
    city.length > 4) 
const [first, second] = citiesData;
console.log(first)
console.log(second)


// TUPLES - кортеж
// масив в якому кодному з елементів даного масиву присвоюється конкретнйи тип даних
let tuple1:[string, number, boolean] = ["user", 11, false];
// масив з строго протипізованими елементами

// enum конструкція 

enum Fruits {
    Orange = 22,
    Mango = 4,
    Banana = 5, 
    Apple = 88
}

console.log (Fruits.Apple)  // [LOG]: 88 


// UNION 
const house: string | number = 23;
const house2: string | number = "23"; //  задаємо множинні типи 

// Narrowing types 
function showData (data: string | number): void {
    if (typeof data === "string") {
    console.log(data.toUpperCase());
    } else {
    console.log(data.toFixed());
    } 
   }
   showData("solid"); // SOLID
   showData(33.45); // 3

// TYPES ALIAS

type UserId = number | string;
function showUserId (id: UserId): void {
 console.log(`Current user ID: ${id}`);
}
showUserId(33); // Current user ID: 33
showUserId("12"); // Current user ID: 12

