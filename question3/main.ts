export class Connect4 {
    jugador: number
    juego: number[][]=[];    //[Fila][Columna]
    juegoFinalizado: boolean = false;
    constructor() {
        // Good luck
        this.jugador = 1
        this.juego.push([0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0]);
        this.juegoFinalizado = false;
    }
  
    play(col: number): string {
        // Good luck
        var puntos = 0;
        var fila = 0;
        var resultado = "";

        //Revisar si el juego ya finalizó
        if (this.juegoFinalizado == true) {
            return "Game has finished!";
        }
        //Revisar si la columna esta llena
        if (this.juego[1][col] != 0)
            return "Column full!";

        //Que fila estamos
        for (var i = 0; i <= 6; i++) {
            //Revisamos si la siguiente fila en dicha columna esta vacia
            if (i == 6 || this.juego[i + 1][col] != 0) {
                //Colocamos la ficha en posición
                this.juego[i][col] = this.jugador
                fila = i
                break;
            }
        }
        //Revisar posiciones entre filas
        if ( this.juego[fila - 1][col] == this.jugador || this.juego[fila + 1][col] == this.jugador) {
            
            for (var x = fila; x <= 6; x++) {
                if (this.juego[x][col] == this.jugador) {
                    puntos++;
                } else { break }
            }
            for (var x = fila-1; x >= 0; x--) {
                if (this.juego[x][col] == this.jugador) {
                    puntos++;
                } else { break }
            }
            if (puntos > 3) {
                this.FinalizarJuego();
                resultado = "Player " + this.jugador + " wins!";
                this.CambioDeJugador();
                this.FinalizarJuego();
                return resultado;
            }
        }
        //Revisar posiciones entre columnas
        if (this.juego[fila][col - 1] == this.jugador || this.juego[fila][col + 1] == this.jugador) {
            puntos = 0;
            for (var x = col; x < 6; x++) {
                if (this.juego[fila][x] == this.jugador) {
                    puntos++;
                } else { break }
            }
            for (var x = col-1; x >= 0; x--) {
                if (this.juego[fila][x] == this.jugador) {
                    puntos++;
                } else { break }
            }
            if (puntos >3) {
                this.FinalizarJuego();
                resultado = "Player " + this.jugador + " wins!";
                this.CambioDeJugador();
                return resultado;
            }
        }
        resultado = "Player " + this.jugador + " has a turn";
        this.CambioDeJugador();
        return resultado;

    }

    CambioDeJugador(){
        if (this.jugador == 1) {
            this.jugador++;
        } else {
            this.jugador--;
        }
    }

    FinalizarJuego() {
        this.juegoFinalizado = true
    }
  }