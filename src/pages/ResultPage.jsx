import '../pages/resultpage.styled.css'

const ResultPage = (props) => {
    return (
       <main className='main'>
        <h2>Movimentações:</h2>

        <span>Número do Processo: {props.cnj} </span>
        <span>Data de Ínicio: {props.data}</span>
        <span>Tribunal de Origem: {props.tribunal}</span>
        <span>Autor: {props.autor}</span>
        <span>Réu: {props.reu}</span>
        <span>Descrição: {props.descricao}</span>

       </main>
    )
}

export default ResultPage