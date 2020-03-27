import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';
import logoimg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';
    export default function Logon(){
        return(

<div  className="logon-container">
            <selection className="formulario">
                <img src={logoimg} alt="Be The Hero"/>
                <form>
                    <h1>Faça seu Login</h1>
                    <input placeholder="sua ID"></input>
                    <button  className="button" type ="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size="18" color="#e02041" />
                        Não tenho cadastro 
                    </Link>
                </form>
            </selection>
            <img src={heroesImg} alt="Heros" />

</div>


        );



    }