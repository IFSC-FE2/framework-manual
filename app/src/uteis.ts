const criarElemento = (tag: string, conteudo = ""): HTMLElement => {
    const elemento = document.createElement(tag);
    elemento.innerHTML = conteudo;
    return elemento;
}

const renderizar = (elemento: HTMLElement): void => {
    const root = document.querySelector('#root') as HTMLElement
    root.appendChild(elemento)
}

export { criarElemento, renderizar }