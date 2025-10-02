import Formulario from "../componentes/Formulario.js";
import Titulo from "../componentes/Titulo.js";
import { criarElemento } from "../uteis.js";
const Principal = () => {
    const registros = [];
    const listaRegistros = criarElemento("ul");
    const adicionarRegistro = (registro) => {
        registros.push(registro);
        renderizarRegistros();
    };
    const renderizarRegistros = () => {
        listaRegistros.innerHTML = '';
        registros.forEach(registro => {
            const texto = `${registro.nome} ${registro.sobrenome}`;
            const item = criarElemento('li', texto);
            listaRegistros.appendChild(item);
        });
    };
    const main = criarElemento('main');
    main.appendChild(Titulo);
    main.appendChild(listaRegistros);
    main.appendChild(Formulario(adicionarRegistro));
    renderizarRegistros();
    return main;
};
export default Principal;
