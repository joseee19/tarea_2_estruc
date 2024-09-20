// José Castañeda 
// 1534422

class Nodo {
    public siguiente: Nodo | null;
    public anterior: Nodo | null;
    public valor: number;

    constructor() {
        this.siguiente = null;
        this.anterior = null;
        this.valor = Math.floor(Math.random() * 9) + 1; // Genera un número aleatorio entre 1 y 9
    }
}

class ListaDobleEnlazada {
    private cabeza: Nodo | null;
    private cola: Nodo | null;

    constructor() {
        this.cabeza = null;
        this.cola = null;
    }

    public insertarAlFinal(): void {
        const nuevoNodo = new Nodo();
        if (this.cabeza === null) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            nuevoNodo.anterior = this.cola;
            if (this.cola) {
                this.cola.siguiente = nuevoNodo;
            }
            this.cola = nuevoNodo;
        }
    }

    public imprimir(): void {
        let actual: Nodo | null = this.cabeza;
        while (actual) {
            if (actual.valor % 2 === 0) {
                console.log(actual.valor);
            }
            actual = actual.siguiente;
        }
    }
}

// Programa principal
let lista = new ListaDobleEnlazada();
for (let i = 0; i < 5; i++) {
    lista.insertarAlFinal();
}
lista.imprimir();
