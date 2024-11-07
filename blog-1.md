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

</br>
</br>

## Intersection type in Typescript

An intersection type in Typescript allow to combine multiple type into one. Intersection type used with the ampersand (&) symbol.

### Example of Intersection type:

```tsx
type Person = { name: string; age: number };
type Worker = { job: string };

type WorkerPerson = Person & Worker;

let worker: WorkerPerson = { name: "Hablu", age: 34, job: "Developer" };
```
