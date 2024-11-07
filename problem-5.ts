{
    const getProperty =<Obj, Key extends keyof Obj>(obj: Obj, key: Key): Obj[Key] => {
        return obj[key]
    }
    // Input:
    const person = { name: "Alice", age: 30 };

    getProperty(person, "name");    // Output: Alice
}