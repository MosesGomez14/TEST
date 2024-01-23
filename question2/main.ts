export function findOutlier(integers: number[]): number {
    var pares = []
    var impares = []
    if (integers.length < 3) {
        console.log("Son menos de 3 numeros")
        return 0
    }
    for (var i = 0; i < integers.length; i++) {
        if ((integers[i] % 2) == 0) {
            pares.push(integers[i])
        } else {
            impares.push(integers[i])
        }
    }
    if (pares.length > impares.length) {
        return impares[0]
    } else {
        return pares[0]
    }
  }