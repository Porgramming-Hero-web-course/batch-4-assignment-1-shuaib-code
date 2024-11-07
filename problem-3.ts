{
    const countWordOccurrences = (sentence: string, word: string): number => {
        const wordRegex = new RegExp(word, 'gi');
        const result = sentence.match(wordRegex);
        return result? result.length: 0;
    }
    
    // Sample Input:
    const sample = countWordOccurrences("I love typescript", "typescript");

    console.log(sample);   // Output: 1
    
}