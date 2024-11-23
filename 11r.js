RemoveEgg = (array) => {
    for(let i of array){
        if(i === 'egg'){
           console.log(array.pop())
        } //else {console.log('continue')}
    }
}
RemoveEgg(['butter', 'cheese', 'meat', 'egg'])