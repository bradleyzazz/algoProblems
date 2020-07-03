/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    let alreadySeen = {}
    N = N % 14 + 14
    while (N--) {    
        if (alreadySeen[cells.join('')]) {
            cells = alreadySeen[cells.join('')]
        } else {
            let newDay = [];
        
            for (let i = 0; i < cells.length; i++) {
                if (i === 0 || i === 7) {
                    newDay.push(0);
                } else if (cells[i-1] === cells[i+1]) {
                   newDay.push(1);
                } else {
                  newDay.push(0);
                }
            }
            let newDayString = cells.join('');
            alreadySeen[newDayString] = newDay;
            cells = newDay;
        }
    }
    
    return cells;
};