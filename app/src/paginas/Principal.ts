import Formulario from "../componentes/Formulario.js";
import Titulo from "../componentes/Titulo.js";
import { criarElemento, renderizar } from "../uteis.js";

interface IRegistro {
    nome: string,
    sobrenome: string
}

const Principal = () => {

    const registros: IRegistro[] = []

    const listaRegistros = criarElemento("ul") as HTMLUListElement

    const adicionarRegistro = (registro: IRegistro) => {
        registros.push(registro)
        renderizarRegistros()
    }

    const renderizarRegistros = () => {
        listaRegistros.innerHTML = ''
        registros.forEach(registro => {
            const texto = `${registro.nome} ${registro.sobrenome}`
            const item = criarElemento('li', texto)
            listaRegistros.appendChild(item)
        })
    }

    const main = criarElemento('main')

    main.appendChild(Titulo)
    main.appendChild(listaRegistros)
    main.appendChild(Formulario(adicionarRegistro))
    renderizarRegistros()

    return main
}

export default Principal;
export { IRegistro }