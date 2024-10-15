import React from "react";
import '../components/Style/cabecalho.css'
import logo from '../assets/icon/Claud.IA_branco.png'


export default function Cabecalho() {
    return(
        <>
            <header>
                <nav className="nav">
                    <ul>
                        <li><a className="item-nav"><img className="logo" src={logo} alt="Logotipo Claud.IA"/></a></li>
                        <li><a className="item-nav">SOBRE</a></li>
                        <li><a className="item-nav">MOBILE</a></li>
                        <li><a className="item-nav">EQUIPE</a></li>
                    </ul>

                    <button className="btn-login">LOGIN</button>
                </nav>
            </header>
        </>
    )
}