function square_rectangle(largeur, longueur) {
    return (largeur * longueur)
}

function perimètre_rectangle(largeur, longueur) {
    return ((largeur + longueur) * 2)
}

function square_triangle_rectangle(base, hauteur) {
    return ((base * hauteur) / 2)
}

function perimètre_triangle_rectangle(largeur, longueur) {
    return (Math.hypot(largeur, longueur) + largeur + longueur)
}

function convert_Kelvin_to_Celsius(K) {
    return (K - 273.15)
}

function perimètre_cercle(rayon) {
    return (2 * Math.PI * rayon)
}

function square_cercle(rayon) {
    return ((rayon * rayon) * Math.PI)
}

function give_me_money(price, billAmount) {
    return (billAmount - price)
}

function how_many_days(prix, budget) {
    const a = budget % prix
    const b = budget - a
    const c = b / prix
    return `Je peux partir ${c} jours et il me reste ${a} euros`
}

function pair(nombre) {
    return ((nombre % 2) === 0)
}

function delete_first_letter(word) {
    return word.substr(1)
}

function delete_last_letter(word) {
    return word.slice(0, -1)
}

console.log(square_rectangle(10, 14))
console.log(perimètre_rectangle(10, 14))
console.log(square_triangle_rectangle(20, 18))
console.log(perimètre_triangle_rectangle(20, 18))
console.log(convert_Kelvin_to_Celsius(50))
console.log(perimètre_cercle(8))
console.log(square_cercle(8))
console.log(give_me_money(15, 20))
console.log(how_many_days(10, 100))
console.log(pair(28))
console.log(delete_first_letter("bonjour"))
console.log(delete_last_letter("Bonjour"))