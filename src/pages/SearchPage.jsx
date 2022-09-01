import { useState, useEffect } from 'react'
import ResultPage from './ResultPage'
import './searchpage.styled.css'

const SearchPage = () => {
    const [processList, setProcessList] = useState([])
    const [busca, setBusca] = useState("")
    const [result, setResult] = useState("")

    function ligaInput(event){
        setBusca(event.target.value)
    }

    function handleSearchProcess(event){
        event.preventDefault()
        const newResult = processList.find(processo =>{
            return processo.cnj.includes(busca)
        })
        setResult(newResult)
        setBusca("")
    }

    useEffect(()=>{
        const getData = async () =>{
            const response = await fetch('https://api-consulta-processual.herokuapp.com/processos')
            const data = await response.json()
            setProcessList(data.results)
        }
        getData()
    },[])
    console.log(processList)
    return(
        <>
            <div className='search'>
                <h1 className="title">Consulta Processual</h1>
                <form onSubmit={handleSearchProcess}>
                    <input className="busca" onChange={ligaInput} value={busca} placeholder="Digite o número do processo"/>
                    <button className="button" type="submit">Buscar</button>
                </form>
            </div>
            {result ? (
                <ResultPage 
                cnj={result.cnj} 
                data={result.data}
                tribunal={result.tribunal}
                autor={result.autor}
                reu={result.reu} 
                descricao={result.descricao} 
            />
            ):(
                <></>
            ) 
        } 
        </>
    )
}

export default SearchPage