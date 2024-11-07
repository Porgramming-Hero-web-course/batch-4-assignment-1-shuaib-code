{
    const removeDuplicates = (array: number[]): number[] => array.reduce((acc: number[], current: number) => {
            !acc.includes(current) && acc.push(current);
            return acc;
        }, [])
    
    // Input:
    const sample = removeDuplicates([1, 2, 3, 2, 3, 4, 4, 5]);

    console.log(sample); //Output: [ 1, 2, 3, 4, 5]
}