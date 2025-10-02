import { criarElemento } from "../uteis.js";
class Botao {
    _elemento;
    constructor(texto, tipo) {
        const atributosBotao = {
            type: tipo,
            class: ['btn']
        };
        this._elemento = criarElemento("button", texto, atributosBotao);
    }
    get elemento() {
        return this._elemento;
    }
}
export default Botao;
