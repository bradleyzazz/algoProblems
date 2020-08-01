const detectCapitalUse = word => {
    let firstLetter = word[0].toUpperCase() + word.slice(1).toLowerCase();
    let allLower = word.toLowerCase();
    let allUpper = word.toUpperCase();
    
    if (allUpper === word || allLower === word || firstLetter === word) {
        return true;
    }
    
    return false;
};