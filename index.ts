
//Task1

function capitalizeWords(input: string): string {
    if (!input.trim()) return ""; // Handle empty or whitespace-only strings
    return input.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}


function isValidNumber(value: unknown): boolean {
    return typeof value === "number" && !isNaN(value);
}


console.log(capitalizeWords("razan alatawi")); // "Hello World"
console.log(isValidNumber(100)); // true
console.log(isValidNumber("100")); 


//Task2
interface User {
    id: number
    name: string
    email: string
    isAdmin?: boolean
}

function createUser(user: User) {
    console.log(`User ${user.name} created successfully`)
}

const username: User = { id: 12, name: "Razan", email: "razan@gmail", isAdmin: true };

createUser(username);


//Task3
class Product {
    private Name: string;
    private price: number;
    private category: string;

    public constructor(Name: string, price: number, category: string) {
        this.Name = Name;
        this.price = price;
        this.category = category;

    }

    public getDiscountedPrice(discount: number) {
        return (this.price - discount);
    }

}




//Task4
function filterArray<T>(arr: T[], predicate: (value: T) => boolean): T[] { return arr.filter(predicate); }
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, num => num % 2 === 0); console.log(evenNumbers);


//Task5
interface User{
    id:number,
    name:string,
    email:string
}

async function fetchUsers(): Promise<User[]> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users.map((user: any) => ({ id: user.id, name: user.name, email: user.email }));
    } catch (error) {
        throw new Error("Error fetching users");
    }
}

// Example usage with error handling
async function displayUsers() {
    try {
      const users: User[] = await fetchUsers();
      users.forEach((user: User) => {
        console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
        console.log('-------------------');
      });
    } catch (error) {
      console.error('Failed to display users:', error);
    }
  }
  
displayUsers();







