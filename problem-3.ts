{
    const countWordOccurrences = (sentence: string, word: string): number => {
        const wordRegex = new RegExp(word, 'gi');
        const result = sentence.match(wordRegex);
        return result? result.length: 0;
    }
    
    // Sample Input:
    countWordOccurrences("I love typescript", "typescript");

    // Output: 1
    
}