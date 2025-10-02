import { criarElemento } from "../uteis.js";

class Botao {

    private _elemento: HTMLButtonElement

    constructor(texto: string, tipo: "button" | "submit" | "reset") {
        const atributosBotao = {
            type: tipo,
            class: ['btn']
        }
        this._elemento = criarElemento("button", texto, atributosBotao) as HTMLButtonElement
    }

    public get elemento() {
        return this._elemento;
    }

}

export default Botao;