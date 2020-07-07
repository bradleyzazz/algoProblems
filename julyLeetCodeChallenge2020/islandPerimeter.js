//  Search All Squares
//  O(n*m) time
//  O(1) space

var islandPerimeter = function (grid) {
    let perimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                // check top
                if (i === 0 || grid[i - 1][j] === 0) {
                    perimeter++;
                }
                // check bottom
                if (i === grid.length - 1 || grid[i + 1][j] === 0) {
                    perimeter++;
                }
                //check left
                if (j === 0 || grid[i][j - 1] === 0) {
                    perimeter++;
                }
                //check right
                if (j === grid[0].length - 1 || grid[i][j + 1] === 0) {
                    perimeter++;
                }
            }
        }
    }
    return perimeter
};

//  DFS Solution
//  Time is still O(n*m), but optimized from solution above
//  Space complexity O(n*m) is larger though, due to recursion

const islandPerimeter = grid => {
    // find first land
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] === 1) {
                return searchLand(grid, i, j);
            }
        }
    }
};

const searchLand = (grid, i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) return 1;
    if (grid[i][j] === 2) return 0;
    grid[i][j] = 2;

    let perimeter = 0;

    perimeter += searchLand(grid, i - 1, j);
    perimeter += searchLand(grid, i + 1, j);
    perimeter += searchLand(grid, i, j - 1);
    perimeter += searchLand(grid, i, j + 1);

    return perimeter;
};