// function greet(name: string):
//     string {
//     return `Hello , ${name}!`;
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// console.log(greet("Razan Alatawi"));
// // Interface tells a ts what objects and property should have
// interface car {
//     brand: string;
//     model: string;
//     year: number;
// }
// const MyCar: car = {
//     brand: "Toyota",
//     model: "Corella",
//     year: 2022,
// }
// console.log(`${MyCar.brand} was made in ${MyCar.year}`)
// //Defining an Interface
// interface User {
//     name: string;
//     age: number;
//     isAdmin?: boolean; // Optional property
// }
// const username: User = { name: "Fatima", age: 30 };
// //Using Interfaces in Functions
// function printUser(username: User) {
//     console.log(`${username.name} is ${username.age} years old`);
// }
// //  Call the function to display output
// printUser(username);
// // Arrays
// let number: number[] = [1, 2, 3, 4];
// // Tuples
// let person: [string, number] = ["alice", 25];
// // enums
// enum Role { admin, user, guest };
// let myrole: Role = Role.admin;
// // classes
// class Car{
//     brand: string;
//     constructor( brand: string){
//         this.brand=brand;
//     }
//     drive() {
//         console.log('My car brand is ${this.brand}');
//     }
// }
// function identity<T>(value: T): T {
//     return value;
//   }
//   console.log(identity<string>("Hello")); // Output: "Hello"
//   console.log(identity<number>(123)); // Output: 123
//Task1
function capitalizeWords(input) {
    if (!input.trim())
        return ""; // Handle empty or whitespace-only strings
    return input.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join(" ");
}
function isValidNumber(value) {
    return typeof value === "number" && !isNaN(value);
}
console.log(capitalizeWords("razan alatawi")); // "Hello World"
console.log(isValidNumber(100)); // true
console.log(isValidNumber("100"));
function createUser(user) {
    console.log("User ".concat(user.name, " created successfully"));
}
var username = { id: 12, name: "Razan", email: "razan@gmail", isAdmin: true };
createUser(username);
//Task3
var Product = /** @class */ (function () {
    function Product(Name, price, category) {
        this.Name = Name;
        this.price = price;
        this.category = category;
    }
    Product.prototype.getDiscountedPrice = function (discount) {
        return (this.price - discount);
    };
    return Product;
}());
//Task4
function filterArray(arr, predicate) { return arr.filter(predicate); }
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = filterArray(numbers, function (num) { return num % 2 === 0; });
console.log(evenNumbers); // Output: [2, 4]
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, users, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    users = _a.sent();
                    return [2 /*return*/, users.map(function (user) { return ({ id: user.id, name: user.name, email: user.email }); })];
                case 3:
                    error_1 = _a.sent();
                    throw new Error("Error fetching users");
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Example usage with error handling
function displayUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var users, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchUsers()];
                case 1:
                    users = _a.sent();
                    users.forEach(function (user) {
                        console.log("ID: ".concat(user.id, ", Name: ").concat(user.name, ", Email: ").concat(user.email));
                        console.log('-------------------');
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('Failed to display users:', error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
displayUsers();
