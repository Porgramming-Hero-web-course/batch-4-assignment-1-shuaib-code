{
    interface Profile {
      name: string,
      age: number,
      email: string
    }

    const updateProfile = (obj: Profile, partialObj: Partial<Profile>): Profile => {
        return {...obj, ...partialObj} 
    }

    // Input :
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    
    console.log(updateProfile(myProfile, { age: 30 }));  // Output:{name: "Alice", age: 30, email: "alice@example.com"}
}