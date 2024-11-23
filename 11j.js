AddArrays = (array1, array2) => {
    const a = array1[0]+array2[0];
    const b = array1[1]+array2[1];
    const x = array1[2]+array2[2];
    const f = array1[3]+array2[3];
    const y = array1[array1.length-1]+array2[array2.length-1];
      console.log(a, b, x, f,y)


}
AddArrays([1,2,3, 0, 9], [1,2,3, 9, 9])