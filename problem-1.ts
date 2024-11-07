{
    const sumArray = (array: number[]): number => array.reduce((acc, current) => acc + current, 0);

    // Input:
    const sample = sumArray([5, 3, 7]);
    
    console.log(sample);   // Output: 15
}
