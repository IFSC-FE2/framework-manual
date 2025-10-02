import { criarElemento } from "../uteis.js";
import Rotulo from "./Rotulo.js";
const Entrada = (texto, tipo = "text", atributos = {}) => {
    const inputContainer = criarElemento("div");
    const atributosInput = {
        ...atributos,
        placeholder: "Digite algo aqui",
        type: tipo,
    };
    const input = criarElemento('input', "", atributosInput);
    const rotulo = Rotulo(texto);
    inputContainer.appendChild(rotulo);
    inputContainer.appendChild(input);
    return inputContainer;
};
export default Entrada;
