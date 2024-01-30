import './styles.css' 
import { useState } from 'react';

export default function BarraDePesquisa() {
    const [termoPesquisa, setTermoPesquisa] = useState('');
    console.log(termoPesquisa);
    return(
        <input type="search"
         placeholder="Digite o que voê procura" 
         className='barra-pesquisa'
         value={termoPesquisa}
         onChange={(evento) => setTermoPesquisa(evento.target.value)}/>
         
    )
}