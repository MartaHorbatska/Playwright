/*  Task 1. Реалізуйте функцію processData(num1, num2, action), яка приймає числові параметри num1, 
num2 і повертає результат їх обчислення в залежності від значення параметра action.
    У випадку якщо:
-	action=”sum” функція має повернути суму
-	action=”product” функція має повернути добуток
-	action=”square” функція має повернути num1 в степені num2
За замовчуванням num1 і num2 рівні 0, а action ”sum”.
	
Приклад роботи:
console.log(processData(10, 4, ”product”));		// 40 */

function processData(num1 = 0, num2 = 0, action = "sum") {
    let result;
    if (action === "sum") {
        result = num1 + num2;
    } else if (action === "product") {
        result = num1 * num2;
    }
    else if (action === "square") {
        result = num1 ** num2;
    } else {
        result = "Unknown action";
    }
    return result
}
console.log(processData()); // 0
console.log(processData(10, 4, "sum")); // 14
console.log(processData(10, 4, "product")); // 40
console.log(processData(10, 4, "square")); // 10000
console.log(processData(10, 4, "time")); //Unknown action

/* 
Task 2.  Реалізуйте функцію findElem(arr, el), яка приймає параметри arr - 
масив і el - елемент. Функція має визначити 
чи міститься елемент el в масиві arr, і повертати відповідне булеве значення.
Приклад роботи:
const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];
console.log(findElem(arr, 7));		// false
console.log(findElem(arr, "Alex"));		// true */

const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];
function findElem(arr, el) {
    return arr.includes(el);
}
console.log(findElem(arr, 7)); // false
console.log(findElem(arr, "Nick")); // true
console.log(findElem(arr, 100000)); // false


/* Task 3. Реалізуйте функцію deleteItem(arr, item), яка приймає параметри arr - 
масив і item – елемент масиву. Функція має видаляти елемент item з масиву arr, і повертати вихідний масив, який не містить цього елемента.

Приклад роботи:
console.log(deleteItem([3, 12, 16, 19, 21, 33], 16));		// [3, 12, 19, 21, 33] */

const arr1 = [3, 12, 16, 19, 21, 33];
function deleteItem(arr1, item) {
    const index = arr1.indexOf(item);
    index !== -1 && arr1.splice(index, 1)
    return arr1;
}
console.log(deleteItem([3, 12, 16, 19, 21, 33], 16)); //  Було: [3, 12, 16, 19, 21, 33] -> Видаляємо 16 (індекс 2) -> Стало: [3, 12, 19, 21, 33]

/* Task 4. Реалізуйте функцію getCircleLength(r), яка приймає параметр r -  радіус кола і обчислює його довжину. 
Передбачити припинення виконання програми і генерацію помилки у випадку, якщо функції передано не числовий або менший-рівний 0 параметр.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
    Приклад роботи:
getCircleLength(“five”); 	// “Incorrect radius - please, enter a positive  numeric value!” */

function getCircleLength(r) {  //  забороняє неправильні значення для змінної r
    if (typeof r !== "number" || isNaN(r) || r <= 0) {
        throw new Error("Incorrect radius - please, enter a positive numeric value!");
    }
    return 2 * Math.PI * r;
}

let input = prompt("Введіть радіус кола:"); //  ввести значення через промпт 
let radius = parseFloat(input);

try {
    let length = getCircleLength(radius);
    alert("Довжина кола: " + length);
} catch (error) {
    alert(`Неправильне значення: "${input}": ${error.message}`);
}

/* Task 5. Реалізуйте функцію checkID(), яка пропонуватиме користувачу ввести власне ID. 
Валідні ID знаходяться в діапазоні від 1 до 1000.
    Функція має генерувати в модальному вікні помилки у випадку, коли: 
    - юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your ID”), 
    - нечислове значення
    - ID знаходиться поза межами коректного діапазону.
Якщо ID валідне юзер отримує відповідне сповіщення.
В блокові catch передбачити виведення назви і опису помилки. */

function checkId(id) {
    if (id.trim() === "") { //  trim забирає лишні пробіли
        throw new Error("The field is empty! Please enter your ID"); // пусте поле
    }
    if (isNaN(id)) {
        throw new Error("ID must be a number!"); // числове значення
    }
    if (id <= 0 || id > 1000) {
        throw new Error("ID must be between 1 and 1000!") // діапазон 1-1000
    }

    alert(`Your ID (${id}) is valid.`);
}
let input = prompt("Введіть Id вашого документу: ");
let idNumber = parseFloat(input);

try {
    checkId(input);
} catch (error) {
    alert(`${error.name}: ${error.message}`);
}

/*
Task 6*. Реалізуйте функцію findArrDiff(arr1, arr2), яка приймає числові масиви arr1, arr2 і повертає масив чисел, які не повторюються у вихідних масивах.
Приклад роботи:
console.log(difference([5, 10, 20], [0, 10, 20, 30]));		// ["5", "0", "30"]
*/