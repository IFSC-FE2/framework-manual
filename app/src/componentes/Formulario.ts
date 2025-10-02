import { IRegistro } from "../paginas/Principal.js";
import { criarElemento } from "../uteis.js";
import Botao from "./Botao.js";
import Entrada from "./EntradaTexto.js";

const Formulario = (adicionarRegistro: (registro: IRegistro) => void) => {

    const formulario = criarElemento("form") as HTMLFormElement;

    const inputNome = Entrada("Nome: ");
    formulario.appendChild(inputNome);

    const inputSobrenome = Entrada("Sobrenome: ")
    formulario.appendChild(inputSobrenome)

    const botaoLimpar = new Botao("limpar", "reset").elemento;
    formulario.appendChild(botaoLimpar)

    const botaoSubmit = new Botao("enviar", "submit").elemento;
    formulario.appendChild(botaoSubmit)

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault()

        const nome = formulario[0] as HTMLInputElement
        const sobrenome = formulario[1] as HTMLInputElement

        const registro: IRegistro = {
            nome: nome.value,
            sobrenome: sobrenome.value
        }

        adicionarRegistro(registro)
    })

    return formulario;
}

export default Formulario;