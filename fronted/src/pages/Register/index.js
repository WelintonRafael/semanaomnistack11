import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowDownLeft} from 'react-icons/fi';


import './styles.css';

import logoimg from '../../assets/logo.svg';

export default function Register (){
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


        <form>
            <input placeholder="NOME DA ONG" />
            <input type ="email" placeholder = "E-mail" />
            <input placeholder ="Whatssap"/>
                <div className = "input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style ={{width:80}} />

                </div>
            <button className="button" type="">Cadastrar</button>
        </form>
    </div>
</div>
);
}