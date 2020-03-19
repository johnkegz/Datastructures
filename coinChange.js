/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let values  = []
    let total = 0;
    for(let i = 0; i<amount; i++){
        for(let j=0; j<coins.length; j++){
            if(total === amount){
                console.log(">>>>>>>>>>>>", total)
                return values
            }
            else if(total < amount){
                console.log(total)
                console.log("+++++++++", coins[j])
                values.push(coins[j])
                total += coins[j]
            }
        }
    }
    
    return values

};

coinChange([1,2,5], 11)