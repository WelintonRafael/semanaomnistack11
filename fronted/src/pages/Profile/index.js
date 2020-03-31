import React,{useEffect, useState} from 'react';
import {Link,useHistory } from 'react-router-dom';
import {FiPower,FiTrash2} from 'react-icons/fi';
import api from '../../services/api';



import './styles.css';

import logoimg from '../../assets/logo.svg';

export default function Profile(){
    const[casos, setCasos] = useState([]);
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
   const ongName = localStorage.getItem('ongName');
   useEffect(() => {
    api.get('perfil', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setCasos(response.data);
    })
  }, [ongId]);

  async function handleDeleteIncident(id){
    try{
        await api.delete(`casos/${id}`, {
            headers: {
                Authorization: ongId,
            }
        });

        setCasos(casos.filter(casos => casos.id !== id));
    }catch(err){
        alert("Erro ao deletar caso. Tente novamente.");
    }
}

  function handleLogout(){
    localStorage.clear();

    history.push('/');
}

  


return(

<div className="profile-container">
    <header>
        <img src ={logoimg} alt= "Be The Hero"/>

<span>Bem Vindo a  Ong {ongName} !</span>
     <Link  to="/casos/new"  className="button">Cadastrar novo caso</Link>
     <button
     onClick={handleLogout}
      type="button">
<FiPower  size ={18} color="#e02041"/>
     </button>
    </header>

<h1>Casos Cadastrados</h1>


<ul>
    {casos.map(casos =>(
      <li key={casos.id} >
      <strong>Caso: {casos.id}</strong>
      <p>{casos.titulo}</p>
      <strong>Descrição</strong>
    <p>{casos.descricao}</p>   
      <strong>Valor :</strong>
    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(casos.valor )}</p>
      
      <button 
      onClick={() => handleDeleteIncident(casos.id)}
      type="button"
      >
          <FiTrash2 size={20} color="#a8a8b3"/>
      </button>
  </li>

    ))}
</ul>

</div>

);}