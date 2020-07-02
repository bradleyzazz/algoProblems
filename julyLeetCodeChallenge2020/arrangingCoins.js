    const arrangeCoins = n => {
        let stairs = 0;
        
        while (n > stairs) {
            stairs++;
            n -= stairs;
        }
        
        return stairs;
    };