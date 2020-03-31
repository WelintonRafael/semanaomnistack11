import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowDownLeft} from 'react-icons/fi';
import api from '../../services/api';


import './styles.css';

import logoimg from '../../assets/logo.svg';

export default function Register (){
    const[nome ,setNome]= useState('');
    const[email ,setEmail]= useState('');
    const[watsap ,setWatsap]= useState('');
    const[city ,setCity]= useState('');
    const[uf ,setUf]= useState('');
    const history = useHistory();

     async function handleRegister(e){

        e.preventDefault();
        const data = {

            nome,
            email,
            watsap,
            city,
            uf,
        };
        try{
            const response = await api.post('ongs',data);

            alert(`Seu Id de Acesso :${response.data.id}`);
            history.push('/');
        }catch(err){

            alert('Cadastro não realizado tente novamente');
        }
        

        

    }

return(
<div className="register-container">
    <div className="contet">
        <section>
            <img src={logoimg} alt="Be The Hero"/>
            <h1>Cadastro</h1>
            <p>Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem os casos da sua ONG.</p>
            <Link className="back-link" to="/">
                        <FiArrowDownLeft size="18" color="#e02041" />
                        Não tenho cadastro 
                    </Link>
         
        </section>


        <form onSubmit={handleRegister}>
            <input 
            value={nome} 
            onChange={e =>setNome(e.target.value)}
            placeholder="NOME DA ONG" />

            <input 
            value={email} onChange ={e=>setEmail(e.target.value)}
            type ="email" placeholder = "E-mail"
             />

            <input
            value ={watsap}
            onChange={e=>setWatsap(e.target.value)}
            placeholder ="Whatssap"
            />

                <div className = "input-group">
                        <input
                        value ={city}
                        onChange ={e=>setCity(e.target.value)}
                        placeholder="Cidade"
                        />
                        <input 
                        value={uf}
                        onChange={e=>setUf(e.target.value)}
                        placeholder="UF" style ={{width:80}}
                         />

                </div>
            <button className="button" type="">Cadastrar</button>
        </form>
    </div>
</div>
);
}