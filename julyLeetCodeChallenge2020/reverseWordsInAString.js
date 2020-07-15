const reverseWords = (s) => {
    let words = s.split(' ').reverse().join(' ').trim();
    
    let result = '';
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] === ' ' && words[i-1] === ' ') {
            continue;
        } else {
            result += words[i];
        }
    }
    return result;
};