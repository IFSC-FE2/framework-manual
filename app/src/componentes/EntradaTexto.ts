import { criarElemento, IAtributos } from "../uteis.js"
import Rotulo from "./Rotulo.js";

const Entrada = (texto: string, tipo = "text", atributos: IAtributos = {}) => {

    const inputContainer = criarElemento("div");

    const atributosInput: IAtributos = {
        ...atributos,
        placeholder: "Digite algo aqui",
        type: tipo,
    }

    const input = criarElemento('input', "", atributosInput) as HTMLInputElement;

    const rotulo = Rotulo(texto)

    inputContainer.appendChild(rotulo);
    inputContainer.appendChild(input);

    return inputContainer
}

export default Entrada