import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';


import './styles.css';

import logoimg from '../../assets/logo.svg';

export default function Newcasos(){
    const [titulo, setTitulo]= useState('');
    const [descricao, setDescricao]= useState('');
    const [valor, setValor] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

 async function handleNewCaso(e){
e.preventDefault();
const data = {

    titulo,
    descricao,
    valor,
};
try{
 await api.post('casos', data , {
     headers: {
         Authorization : ongId,
     }
 })
 alert('Caso cadastrado com sucesso')
 history.push('/profile')
} catch(err){

    alert('Erro ao Cadastrar Caso, tenta novamente.')
}

}
return(
    <div className="new-casos">
    <div className="contet">
        <section>
            <img src={logoimg} alt="Be The Hero"/>
            <h1>Cadastro novo caso</h1>
            <p>Descreva o caso detaladamente  para encontrar um heróri para resolver isso.</p>
            <Link className="back-link" to="/Profile">
                        <FiArrowLeft size="18" color="#e02041" />
                        Voltar para home
                    </Link>
         
        </section>


        <form onSubmit ={handleNewCaso}>
            <input 
            placeholder="Titulo do caso"
            value={titulo}
            onChange= {e=>setTitulo(e.target.value)}
            />
            <textarea  
             value={descricao}
             onChange= {e=>setDescricao(e.target.value)}
            placeholder = "Descrição" 
            />
            <input 
            value={valor}
            onChange= {e=>setValor(e.target.value)}
            placeholder ="valor em reais"
            />
                
            <button className="button" type="">Cadastrar</button>
        </form>
    </div>
</div>
);}
