function lettre(nom){
    return nom.charAt(0)
}
console.log(lettre("oumaima"))



function nombre(nbr){
    if(nbr%2===0){
        return console.log("le nombre "+nbr+" un nombre pair")
    }else{
        return console.log("le nombre "+nbr+" un nombre impair")
    }
}
nbr(13)