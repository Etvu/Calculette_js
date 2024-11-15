const section = document.getElementById("resultat")
const buttons = document.querySelectorAll(".calculatrice button");
const operation = document.querySelectorAll(".operation button");
let nb = ""
let nb2= ""
let ope2 = ""
let indcalcul = ""
let calcul
buttons.forEach(button => { //on parcours les bouttons de calculatrice
    button.addEventListener("click", () => {
        if(ope2==""){ //si on appuie pas sur les opérations on ajoute au chiffre 1
            const number = button.textContent; //on recup
            resultat.textContent += number; //on ecrit lechiffre
            nb=nb+number

        }else if(ope2!="" && indcalcul!=1){
            const number = button.textContent; //on recup
            resultat.textContent += number; //on ecrit lechiffre
            nb2=nb2+number
        }
    });
});

operation.forEach(button => {
    button.addEventListener("click", () => {
        const ope = button.textContent; 
        resultat.textContent += ope; 
        ope2=ope2+ope
        console.log(ope2)
    });
});

function calculer(){
    indcalcul = 1
    nb=parseFloat(nb)
    nb2=parseFloat(nb2)
    if(ope2!="" && indcalcul==1){
            if(ope2=="+"){
                calcul = addition(nb,nb2)
                resultat.textContent += "=" +calcul;
            }else if (ope2=="-"){
                calcul = soustraction(nb,nb2)
                resultat.textContent += "=" +calcul;
            }else if (ope2=="x"){
                calcul = multiplication(nb,nb2)
                resultat.textContent += "=" +calcul;
            }else if (ope2=="/"){
                calcul = division(nb,nb2)
                resultat.textContent += "=" +calcul;
            }
    }
}
function addition(nb, nb2){
    calcul = nb+nb2
    return calcul
}
function soustraction(nb, nb2){
    calcul = nb-nb2
    return calcul
}
function multiplication(nb, nb2){
    calcul = nb*nb2
    return calcul
}
function division(nb, nb2){
    calcul = nb/nb2
    return calcul
}

function reset(){
    nb = ""
    nb2= ""
    ope2 = ""
    resultat.textContent = ""
    indcalcul =""
    calcul=""
}