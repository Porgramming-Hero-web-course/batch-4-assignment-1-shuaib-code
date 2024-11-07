{
    const countWordOccurrences = (sentence: string, word: string): number => {
        const wordRegex = new RegExp(word, 'gi');
        const result = sentence.match(wordRegex);
        return result? result.length: 0;
    }
    
    // Sample Input:
    const sample = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

    console.log(sample);   // Output: 2
    
}