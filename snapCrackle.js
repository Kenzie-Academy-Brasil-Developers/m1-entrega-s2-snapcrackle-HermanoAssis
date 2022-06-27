function snapCrackle(maxValue){
    let resultado = " "
    for(let num = 1; num <= maxValue; num++){
        if([num] % 2 == 1 && [num] % 5 == 0){
            resultado += "SnapCrackle, "
        }else if ([num] % 2 == 1){
            resultado += "Snap, "
        }else if ([num] % 5 == 0){
            resultado += "Crackle, "
        }else{
            resultado += (`${[num]}, `)
        }
    }
    return resultado
}
console.log(snapCrackle(12))