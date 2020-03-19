function numOffices(grid){
let count = 0;
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(i===0 && grid[i][j]===1 && grid[i][j+1]===0){
                count += 1
            }
            else if(i>0 && grid[i-1][j]!==1 && grid[i][j]===1 && grid[i][j+1]===0){
                count += 1
            }
            else if(i>0 && grid[i-1][j]!==1 && grid[i][j]===1 && grid[i][grid[i].length-1] === 1 && grid[i].length-1 === j){
                count += 1
            }
        }
    }
    console.log(count);
    return count
}

const data = [
    [1,1,1,0,0],
    [0,0,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0]]

const data2 = [
    [1,1,1,1,0],
    [0,0,0,0,1],
    [0,0,1,0,0],
    [0,0,0,0,1],
    ]

numOffices(data)