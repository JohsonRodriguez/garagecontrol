export class Movilidades {
    id?: number;
    chofer: string;
    marca: string;
    modelo: string;
    placa: string;

    constructor(chofer: string, marca: string, modelo: string, placa: string) {
        this.chofer = chofer;
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
    }
}

