# What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

Type alias and Interface both are Typescript feature to enforce type safety. There are some use cases when we should use type alias and interface. They both some times do the same job but not all the time. We should aware when should we choose between them.

In general, Interface design for object, class and API response and type alias for other primitive types like string, number, boolean, array. Type alias can be used in object too but we are not able to use Interface for string, number or other data types.

Interface looks like an object. You can use comma(,) or semicolon(;) to end of the line. Common convention is semicolon(;) to end Interface line. Let's closely look at the example below:

```js
Interface User {
    id: number;
    name: string;
    role: string;
}
```

Let's take a look how we can use interface in Object or a Class:

```js
const user = [
    {id: 1, name: "John doe", role: "user"},
    {id: 2, name: "Jahn doe", role: "admin"}
]

// How to use in function
function getName(user: User) {
    return user.map(userItem => userItem.name);
}

// How to use in Class
class Member implements User {

}
```

Let's take a look how we can use Type alias:

```js
type User = string
type Status = "pending" | "approved" | "rejected"

const user: User = "John Doe"
```

Now, let's take a look of some caveats about Interface & Type alias:

1.  We can make multiple Interface with the same name but we are not able to define type with the same name.

2.  We can use union(|) or intersection(&) in Type alias but not able to use it with Interface.
