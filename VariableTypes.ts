export {};
let message = "Hello, mom how are you?";

console.log("message", message);

let isBeginner: boolean = true;
let number: Number = 20.32234234;
let name: String = "Code evolution";

let sentence: string = `My name is ${name}.
I am ${number.toPrecision(4)} years old.`;

console.log("sentence", sentence);

let isNew: boolean | null = true;
let isFresh: boolean | undefined = undefined;

let myName: string | null = null;

let list1: number[] = [23, 23, 15, 54];
let list2: Array<number> = [23, 23, 23, 23]; //have the same result as previous one

let person1: [string, number] = ["ewrew", 323]; //declare the types & order of every element of the array.

enum Color {
  Red = 5,
  Green,
  Blue,
}
let myColor: Color = Color.Blue;

console.log("myColor", myColor);

let randomValue: any = "eweew";

randomValue = 2332;

let myRandomNumber: unknown = "weqe";

(myRandomNumber as string).toUpperCase(); //this is called type assertion or type casting in other language

// (myRandomNumber as string).toUpperCase()

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}
let myRandomValue: unknown = { name: "Md Ishaq" };

// checking if it is a object consist of name property.
if (hasName(myRandomValue)) {
  // console.log('My name is ',myRandomValue.name)
}

let a;
a = 10;
a = true; //type inference does not work if it is not initiate at the time of declaration

let b = 20;
// b = true //here type inference works properly

let multiType: number | boolean;
multiType = 3123;
multiType = true;

// difference between any type and multiType are multiType has limited types and intelligence support.AnyType does have any.
