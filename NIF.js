class NIF {
    constructor(nif) {
        this.nif = nif;
        this._letra = this.calculaLetra(nif);
    }
    get nif() {
        return this._NIF
    }
    set nif(nuevoNif) {
        this._nif = nuevoNif;
        this._letra = this.calculaLetra(nuevoNif);
    }
    get letra() {
        return this._letra;
    }
    calculaLetra(n) {
        let letra="";
        const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P',
        'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];
        letra = letras[n%23];
        return letra;
    }
    mostrar() {
        return `${this._nif}-${this._letra}`;
    }
}
export {NIF};