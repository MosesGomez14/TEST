export function isValidWalk(walk: string[]) {
    if (walk.length <= 0) {
        console.log("No estas moviendote")
        return false
    }
    if (walk.length != 10) {
        console.log("La caminata te tom�: " + walk.length+ " lo cual es distinto al tiempo esperado")
        return false
    }
    console.log("Caminata valida")
    return true
}

