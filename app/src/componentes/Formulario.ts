import { criarElemento } from "../uteis.js";
import Entrada from "./EntradaTexto.js";

const Formulario = () => {

    const formulario = criarElemento("form");

    const inputNome = Entrada("Nome: ");
    formulario.appendChild(inputNome);

    const inputSobrenome = Entrada("Sobrenome: ")
    formulario.appendChild(inputSobrenome)

    return formulario;
}

export default Formulario;