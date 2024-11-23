minMax = (array) => {
     let i = array[+'']
   let a = Math.max(array.values)
    let b = Math.min(array.values)
        if (i === a ){
            console.log(`${a}:maximal`, array)
        }else if (i === b){
            console.log(`${b}:minimal`, array)
        }


}
minMax([1,3,4,5])