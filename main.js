const display = document.getElementById("display"); 
//  Cette ligne demande au JavaScript d'aller chercher l'élément HTML qui a l'ID #display. 
// On utilise const car cette connexion ne changera pas.
// C'est grâce à cette variable que le script peut lire ce qui est écrit ou écrire un résultat
function insert(input){ 
    display.value += input; 
} 
// Le symbole += indique que si l'écran affiche "5" et que l'on appuie ensuite sur "0", il faut les concatener pour avoir 50 et non remplacer le 5 par 0.

function clearDisplay(){ 
    display.value = ""; 
} 
// Ici, on remplace tout le contenu de l'écran par une chaîne de caractères vide.
// C'est l'équivalent de tout effacer

function toggleSign(){ 
    display.value = - display.value; 
} 
// Le signe moins devant la valeur indique qu'il faut transformer ce nombre en son opposé.
 
function Del(){ 
    display.value = display.value.slice(0,-1); 
} 
// La méthode slice permet de découper une portion de texte
// 0 est le début du texte, -1 est l'avant-dernier caractère.
// Cela dit à la calculatrice de tout réécrire sauf le dernier caractère
 
function calculate(){ 
        try{ 
            // Demande au programme d'essayer...
        display.value = eval(display.value)
        //  d'exécuter avec la fonction eval la chaîne de texte comme un vrai calcul.
    } 
    catch(error){ 
        // Si l'utilisateur a écrit quelque chose d'impossible (ex: "5++2"), 
        // le programme "attrape" l'erreur
        display.value = "Erreur"; 
        // On affiche un message d'alerte à l'utilisateur.
        setTimeout(clearDisplay, 1500); 
        // Attend 1500 millisecondes avant d'effacer le mot erreur automatiquement.
    } 
} 

function sqrt() {
    let actualValue = parseFloat(display.value);
    // Tout ce qui provient d'un élément HTML est considéré comme du texte
    // Pour faire des operations la fonction parseFloat analyse la chaîne de caractères et la convertit en "vrai" nombre
    display.value = Math.sqrt(actualValue); 
    // Utilise la bibliothèque mathématique standard de JavaScript pour calculer la racine carrée du nombre obtenu 
    // apres avoir utiliser la fonction precedente, voila pourquoi on utilise une autre variable actualValue au lieu d'utiliser le display.value

}