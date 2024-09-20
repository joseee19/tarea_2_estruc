// José Castañeda
// 1534422

class Nodo {
    public siguiente: Nodo | null;
    public anterior: Nodo | null;
    public valor: number;

    constructor(valor: number) {
        this.siguiente = null;
        this.anterior = null;
        this.valor = valor;
    }
}

class ListaDobleEnlazada {
    private cabeza: Nodo | null;
    private cola: Nodo | null;

    constructor() {
        this.cabeza = null;
        this.cola = null;
    }

    public insertarAlFinal(valor: number): void {
        const nuevoNodo = new Nodo(valor);
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


let lista = new ListaDobleEnlazada();
let valores = [1, 3, 4, 8, 6];

for (let valor of valores) {
    lista.insertarAlFinal(valor);
}

lista.imprimir();


