/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var minimumConcat = function(initial, goal) {
    let count = 0
    for(let i=0; i<initial.length; i++){
        for(let j=0; j<goal.length; j++){
            if(initial[i] === goal[j]){
                count++
                i++
            }
        }
    }
    console.log(count);
    return count
};

minimumConcat(['x','y','z'], ['x','z','x','z'])