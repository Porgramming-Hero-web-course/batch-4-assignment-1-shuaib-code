{
    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {

        let isExist: boolean = true;

        const keysOfObject: string[] = Object.keys(obj as string)

        keys.forEach(key => (!keysOfObject.includes(key as string)) && (isExist = false))

        return isExist
    }

    // Input:
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    
    console.log(validateKeys(person, ["name", "age"]));   // Output: true;
}