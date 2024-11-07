# The significance of Union and Intersection types in Typescript.

</br>

## Union type in Typescript

In Typescript union type allow a variable or a function parameter to recive more then one type which gives flexibility and allow to handle multiple type in one variable or argument.

Union type used with the pipe ( `|` ) symbol.

### Example of Union type:

```tsx
type value = string | number;

const age: value = 45; // valid because 45 is a number
const name: value = "asik"; // valid because "asik" is a string
```

In this code, the `value` type is defined to accept either a `string` or a `number`, making it flexible for different kinds of values. When we write `type value = string | number;`, it means any variable with the type `value` can hold either text (a `string`) or a number. For example, `const age: value = 45;` is allowed because `45` is a `number`, and `const name: value = "asik";` works because `"asik"` is a `string`.

</br>

## Intersection type in Typescript

An intersection type in Typescript allow to combine multiple type into one. Intersection type used with the ampersand (`&`) symbol.

### Example of Intersection type:

```tsx
type Person = { name: string; age: number };
type Worker = { job: string };

type WorkerPerson = Person & Worker;

let worker: WorkerPerson = { name: "Hablu", age: 34, job: "Developer" };
```

In this code, two types are defined: `Person`, which has `name` and `age` properties, and `Worker`, which has a `job` property. A new type called `WorkerPerson` is created by combining `Person` and `Worker` using the intersection operator (`&`). This means that `WorkerPerson` will have all the properties from both `Person` and `Worker`: `name`, `age`, and `job`. Then, a variable `worker` of type `WorkerPerson` is declared and assigned an object `{ name: "Hablu", age: 34, job: "Developer" }`.
