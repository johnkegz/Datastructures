function selectionSort(arr){

    const swap = (arr, indx1, indx2) => ([arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]])

    for(let i=0; i<arr.length; i++){
        let smallest = i;
      for(let j=i+1; j<arr.length; j++){
        if(arr[j] < arr[smallest]) smallest = j
      }
      if(smallest !== i){
        // const temp = arr[smallest]
        // arr[smallest] = arr[i]
        // arr[i] = temp;
        swap(arr, smallest, i)
      }
    }
    return console.log(arr)

  }
  
  selectionSort([2,3,1,4,20,5,7,1,19]) 