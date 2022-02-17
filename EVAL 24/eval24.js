// Etape 1 - Sélectionner nos éléments
// Etape 2 - Cacher l'erreur
// Etape 3 - Générer un nombre aléatoire
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
// Etape 5 - Agir à l'envoi du formulaire
// Etape 6 - Créer la fonction vérifier
// Pour ceux qui ne sont pas familiers avec ce jeu, il s'agit de
// deviner le prix d'un produit. Ici, trois possibilités :
// - C'est plus cher
// - C'est moins cher
// - C'est le juste prix !
// Dans cette version du "Juste prix", nous générerons un
// prix aléatoire, et nous calculerons le nombre de coups
// qu'il faut à un joueur pour retrouver le juste prix.
// Ainsi, il pourra se confronter à ses amis pour tenter de
// voir qui retrouve le bon prix avec le moins de coups
// possibles !
// Je vous attends dans la prochaine session !


let randomNumberFloor = Math.floor(Math.random()*1000);

let tentacles = prompt("Choisis un nombre entre 1-1000:");
tentacles = Number

let compte = 0


function devine(){
    if (tentacles === randomNumberFloor){
        alert("bien ouej cow-boy!! U winnnn");
        // let compte = ++1;
        alert("vous avez joué : " + compte);
        

    }
    
    
    
    
    else {
        tentacles <= randomNumberFloor;
        // let compte = ++1;
        alert("cherches plus haut!");
    }

    {
        // let compte = ++1;
        alert("cherches plus bas!");
    }   


}


console.log(devine());

// let message=document.querySelector(".message")


// let start = document.querySelector("start");

// let envoyer = document.querySelector("button");







