function numOffices(arr){
let count = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i===0 && arr[i][j]===1 && arr[i][j+1]===0){
                count += 1
            }
            else if(i>0 && arr[i-1][j]!==1 && arr[i][j]===1 && arr[i][j+1]===0){
                count += 1
            }
            else if(i>0 && arr[i-1][j]!==1 && arr[i][j]===1 && arr[i][arr.length-1] ===1){
                count += 1
            }
        }
    }
    return count
}

const data = [
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0]]

const data2 = [
    [1,1,1,1,0],
    [0,0,0,0,1],
    [0,0,1,0,0],
    [0,0,0,1,1],
    ]

numOffices(data2)