# What is Type Narrowing in TypeScript? Provide practical examples using typeof, instanceof, and the in operator.

Type Narrowing in TypeScript is a technique to narrow down the type from a broader type. Sometimes, we defined a type can be string or number or boolean. With the help of type narrowing, we can narrow down the type to a specific type. There are many ways to narrow down the broader type. Such as:

1. Typeof Operator
2. Truthy/Falsy
3. Instance of
4. In Operator

Let's take a look of an example with the typeof operator:

```js
type ProcessInput = string | number | boolean;

function processInput(value: ProcessInput): ProcessInput {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return value ? "Active" : "Inactive";
}
```

We can use instanceof operator to check if the child class/extend class is an instance of parent class. Like so:

```js
class Employee {}

class Manager extends Employee {}

const manager = new Manager();

console.log(manager instanceof Employee); // true
```

We can use in operator to check if the property exist in a specific object. Here is an example how we can use in:

```js
const user = {
    id: 1,
    name: "John",
    role: "user",
};

console.log("role" in user); // true
```

Type narrowing is an imporant concept/technique to write safe code. It helps to check every possible type of a variable and take decision based on the type. Also, if we can properly use type narrowing technique, we will get the code editor hints from specific type. Like, if we narrow down a type from string | number to string, We will see that we are getting hints of string method/properties.
