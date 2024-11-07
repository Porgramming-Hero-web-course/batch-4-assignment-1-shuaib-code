{
    const removeDuplicates = (array: number[]): number[] => array.reduce((acc: number[], current: number) => {
            !acc.includes(current) && acc.push(current);
            return acc;
        }, [])
    
    // Input:
    removeDuplicates([1, 2, 3, 2, 3, 4, 4, 5]);

    //Output: [ 1, 2, 3, 4, 5]
}