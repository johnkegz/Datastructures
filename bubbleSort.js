function bubbleSort(arr){
    let sorted = arr
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr.length; j++){
        if(arr[j] > arr[j+1]){
           let temp = arr[j+1]
           arr[j+1] = arr[j]
           arr[j] = temp
           }
      }
    }
    return console.log(arr)
  }
  
  bubbleSort([2,3,1,4,20,5,7,1,19])