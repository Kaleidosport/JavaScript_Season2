
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1.concat("", texte2)
}
let afficherCar5 =  (texte) => {
    return texte.substring(4, 5)
}
let afficher9Car =  (texte) => {
    return texte.substring(0, 9)
}
let majusculeString =  (texte) => {
    return texte.toUpperCase()
}
let minusculeString =  (texte) => {
    return texte.toLowerCase()
}
let SupprEspaceString =  (texte) => {
    return texte.trim()
    // Or return texte.slice(1, -1)
}
let IsString =  (texte) => {
    return typeof texte === "string" ? true : false
}

let AfficherExtensionString =  (texte) => {
    return texte.substring(texte.lastIndexOf(".") + 1)
    /**
     * Remove + 1 to get ".jpg" as an answer while texte.lastIndexOf = 25
     * return texte.split(".").pop() works as well
     */
}

let NombreEspaceString =  (texte) => {
    return texte.match(/\s/g).length
    // Gonna have to ask Arnaud why texte.search(/\s/g) returns 4 instead of 5
}
let InverseString =  (texte) => {
    return texte.split("").reverse().join("")
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {

}
let valeurAbsolue =  (nombre) => {

}
let valeurAbsolueArray =  (array) => {

}
let sufaceCercle =  (rayon) => {

}
let hypothenuse =  (ab, ac) => {

}
let calculIMC =  (poids, taille) => {

}
