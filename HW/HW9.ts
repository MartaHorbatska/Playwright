/* Task 1. Створіть функцію superSort(arr, direction), яка приймає масив рядків arr і напрямок сортування direction з двома можливими значеннями: «asc» і «desc». Функція повертає відсортований масив як копію.
Створіть type alias SortFunction для цієї функції.
Приклад роботи:
const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));
// [ 'Alex', 'Ira', 'Nina', 'Vlad' ]
const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);
// [ 'D', 'C', 'B', 'A' ] */

type SortDirection = "asc" | "desc";
type SortFunction = (arr: string[], direction: SortDirection) => string[];
const superSort: SortFunction = (arr, direction) => {
    const sorted = [...arr].sort();

    if (direction === "asc") {
        return sorted;
    } else {
        return sorted.reverse();
    }
};
const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc")); // [ 'Alex', 'Ira', 'Nina', 'Vlad' ]
const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result); // [ 'D', 'C', 'B', 'A' ]


/* Task 2. 
1) Створіть інтерфейс Parcel для представлення сутності в системі доставки посилок.
Посилка містить такі властивості:
§ id: ціле число, яке не можна змінити -> readonly id: number
§ weight: плаваюче значення -> weight: number
§ dimensions: інтерфейс «Dimensions».   
§ description: необов'язкове значення -> description?: string
§ sender: може зберігати ідентифікаційний номер відправника або повне ім'я -> sender: string | number
§ status: enum `PackageStatus` -> status: PackageStatus
§ deliver: функція -> deliver(isSuccess: boolean): void 
§ statusName: геттер -> readonly statusName: string, повертає тому можем рідонлі використати

2) Інтерфейс Dimensions складається з length, width та height, усі з яких можуть бути числами з плаваючою комою.


3) Enum PackageStatus має такі можливі значення: Pending, InTransit, Delivered, Lost.

4) Функція deliver() приймає логічний параметр isSuccess, без значення, що повертається.

5) Геттер statusName() повертає назву статусу посилки у вигляді рядка.


Приклад роботи:
const item: Parcel = {
    id: 224,
    weight: 22.5,
    dimensions: {
        length: 105,
        width: 44,
        height: 50.5
    },
    sender: "Nick Scot",
    description: "Super power inside.",
    status: PackageStatus.Pending,
    deliver(isSuccess) {
        this.status = isSuccess
            ? PackageStatus.Delivered
            : PackageStatus.Lost;
    },
    get statusName() {
        return PackageStatus[this.status];
    }
}
item.deliver(true);
console.log(item.statusName); // Delivered */

interface Parcel {readonly id: number, weight: number, dimensions: Dimensions, description?: string, sender: string | number, status: PackageStatus,
    deliver(isSuccess: boolean): void, readonly statusName: string } // 1 + getter statusName(5)
interface Dimensions { length: number, width: number, height: number }; // 2
enum PackageStatus { Pending, InTransit, Delivered, Lost }; // 3

const item: Parcel = {
    id: 224,
    weight: 22.5,
    dimensions: {
        length: 105,
        width: 44,
        height: 50.5
    },
    sender: "Nick Scot",
    description: "Super power inside.",
    status: PackageStatus.Pending,
    deliver(isSuccess: boolean) { // 4
        this.status = isSuccess
            ? PackageStatus.Delivered
            : PackageStatus.Lost;
    },
    get statusName() {  // 5
        return PackageStatus[this.status];
    }
};
item.deliver(true);
console.log(item.statusName); // Delivered

/* Task 3*. Створіть класи, які моделюють базову систему управління користувачами з користувачем та адміністратором.
Існує абстрактний клас User з наступними членами:
§ id - унікальне ціле число, яке починається з 1000 і збільшується для кожного екземпляра користувача; не може бути змінено після ініціалізації
§ email - адреса електронної пошти користувача
§ password - пароль користувача, доступний лише всередині цього класу
§ passwordPreview - геттер для паролю
§ changePassword - метод, який отримує новий пароль і встановлює його в клас
§ showProfile - пустий метод, який має бути реалізований у похідних класах
Пароль користувача password повинен містити щонайменше 6 символів, інакше вивести повідомлення: «Password too short!».
Геттер passwordPreview повертає пароль, але показує тільки перший і останній символи, а всі інші символи замінюються символом '*'. Наприклад: «Qwerty» буде показано як “Q****y”.
Існує також клас Admin, який розширює клас User і реалізує інтерфейс Printable .
Цей клас має булеву властивість isActive і реалізує метод showProfile, який виводить URL-адресу на консоль залежно від активного статусу:
§ active: «https://softserve/profile/{user_id}»
§ inactive: «https://softserve/login»
Інтерфейс Printable має метод print, який використовується для виведення назви класу у консоль.
Приклад роботи:
const admin = new Admin('admin@gmail.com', 'Qwerty');
admin.changePassword('Weak');
console.log(admin.passwordPreview);
admin.changePassword('Super-Pass');
console.log(admin.passwordPreview);
// Result:
Password too short!
Q••••y
S••••••••s */