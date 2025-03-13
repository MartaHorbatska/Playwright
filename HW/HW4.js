/* Task 1. Для заданого об’єкта scores видалити властивості, значення яких є нечисловими. Вивести змінений об’єкт.
const scores = {
programming: 88,
design: 74,
jurisprudence: false,
relational_DB: 92,
computerGraphics: "submitted",
patterns: 65,
philosophy: "transferred",
network: 81
};

Task 2. Реалізуйте клас Student, конструктор якого приймає 2 параметри fullName – ім’я і прізвище студента, direction – напрямок, на якому він навчається.
Створіть метод класу showFullName(), який повертає ім’я і прізвище студента.
Створіть метод класу nameIncludes(data), який використовуючи метод showFullName() здійснює перевірку наявності в імені студента текстового аргумента data і повертає відповідно true, якщо співпадіння знайдено чи false, якщо не знайдено.
Створіть статичний метод класу studentBuilder(), який повертає новий екземпляр класу з іменем ‘Ihor Kohut’ і напрямком 'qc'.
Створіть гетер і сетер direction() для вичитування і задання поля direction.
Створіть екземпляр класу stud1 з іменем 'Ivan Petrenko' і напрямком 'web'.
Створіть екземпляр класу stud2 з іменем 'Sergiy Koval' і напрямком 'python'.
Створіть екземпляр класу stud3 з іменем ‘Ihor Kohut’ і напрямком 'qc' за допомогою статичного методу studentBuilder().


Приклад застосування:
const stud1 = new Student('Ivan Petrenko', 'web');
stud1.nameIncludes('Ivan'); // true
stud1.nameIncludes('Denysenko'); // false

Task 3. Реалізуйте клас Plane, конструктор якого приймає 3 параметри model - модель літака, fuelSupply - місткість запасу палива літака, fuelConsumption - середня витрата палива в літрах на 100 км польоту.
Створіть метод класу calcFlightRange(), який визначає дальність польоту літака за формулою fuelSupply / fuelConsumption * 100 і повертає її.
Створіть статичний метод класу sortFlightRange(planesArray), який приймає масив екземплярів класу planesArray, сортує дальність польоту літака в порядку зростання та виводить результат на консоль у форматі plane_model: дальність_польоту.

Створіть клас TransportPlane, успадкований від класу Plane, конструктор якого приймає 5 параметрів model - модель літака, fuelSupply - кількість палива, fuelConsumption - середня витрата палива в літрах на 100 км, cargo - максимальний тоннаж, addTank - про додаткові баки літака. У цьому класі вам потрібно перевизначити метод calcFlightRange(), щоб врахувати, що запас палива fuelSupply збільшується завдяки додатковим бакам addTank.
Створіть клас PassengerPlane, який успадковується від класу Plane, конструктор якого приймає 5 параметрів model, fuelSupply, fuelConsumption , passengers – максимальна кількість пасажирів, refueling – кількість додаткового палива, отриманого при заправці. У цьому класі вам потрібно перевизначити метод calcFlightRange(), щоб врахувати, що fuelSupply збільшується завдяки заправці refueling.
Створити клас WarPlane, який успадковується від класу Plane, конструктор якого приймає 5 параметрів model, fuelSupply, fuelConsumption, missiles - кількість ракетного озброєння, aerodynamicsKoef - коефіцієнт аеродинаміки літака. У цьому класі вам потрібно перевизначити метод calcFlightRange() таким чином, щоб врахувати, що дальність польоту літака збільшується пропорційно значенню аеродинамічного коефіцієнта aerodynamicsKoef.


Приклад застосування:

console.log("Unsorted range of planes:");
const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000);
console.log("An-225 Mriya: ", plane1.calcFlightRange());
const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000);
console.log("Boeing-747:", plane2.calcFlightRange());
const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2);
console.log("F-22 Raptor:", plane3.calcFlightRange());
console.log("Sorted range of planes:");
const planesArray = [plane1, plane2, plane3];
Plane.sortFlightRange(planesArray);


Вивід в консолі:
Unsorted range of planes:
An-225 Mriya: 8100
Boeing-747: 11320
F-22 Raptor: 3075
Sorted range of planes:
F-22 Raptor: 3075
An-225 Mriya: 8100
Boeing-747: 11320

Task 4*. Створіть клас Library із властивостями назви бібліотеки name та колекції книг books.
Клас повинен мати реалізовані методи:
1) додавання книг addBook(book), який додає книгу book до поточної колекції книг books і виводить в консоль відповідне повідомлення `Book book_name added to library_name.`
2) видалення книг removeBook(book), який видаляє книгу book з поточної колекції книг books і виводить в консоль відповідне повідомлення `Book book_name removed from library_name.`. У випадку, якщо книги book немає в колекції виводиться повідомлення `Book book_name does not exist in library_name.`.
3) відображення всіх книг displayBooks(), спочатку виводить в консоль повідомлення `Books in library_name:`, потім виводить всі книги в колекції в форматі номер_книги. назва_книги. У випадку, якщо в колекції книг немає виводиться "No books available."
Створіть декілька об’єктів класу Library та додайте та видаліть книги..


Приклад застосування:

const library = new Library("JS library");
library.displayBooks();
library.addBook("Javascript: The Definitive Guide - David Flanagan");
library.addBook("You don`t know JS - Kyle Simpson");
library.addBook("Eloquent JavaScript, 4th Edition - Marijn Haverbeke");
library.displayBooks();
library.removeBook("Javascript: The Definitive Guide - David Flanagan");
library.displayBooks();


Вивід в консолі:
Books in JS library:
No books available.
Book "Javascript: The Definitive Guide - David Flanagan" added to JS library.
Book "You don`t know JS - Kyle Simpson" added to JS library.
Book "Eloquent JavaScript, 4th Edition - Marijn Haverbeke" added to JS library.
Books in JS library:
1. Javascript: The Definitive Guide - David Flanagan
2. You don`t know JS - Kyle Simpson
3. Eloquent JavaScript, 4th Edition - Marijn Haverbeke
Book "Javascript: The Definitive Guide - David Flanagan" removed from JS library.
Books in JS library:
1. You don`t know JS - Kyle Simpson
2. Eloquent JavaScript, 4th Edition - Marijn Haverbeke */