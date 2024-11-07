{
    const countWordOccurrences = (sentence: string, word: string): number => {
        const wordRegex = new RegExp(`\\b${word}\\b`, 'gi');
        const result: string[] | null = sentence.match(wordRegex);
        return result? result.length: 0;
    }
    
    // Sample Input:
    console.log(countWordOccurrences("I love typescript", "typescript"));;

    // Output: 1
}