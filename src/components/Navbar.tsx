import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/imagiflix.svg";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import user from "../assets/user.jpg";

//21 parte 6
const NavBar = () => (
    <nav className="absolute top-0 left-0 grid grid-cols-2 items-center w-full p-8">
        <div className="justify-self-start grid grid-cols-2 gap-4 items-center">
            <h1 className="hidden">Imagiflix</h1>
            <img src={logo} className="w-36" alt="Imagiflix" />
            <ul className="grid grid-flow-col gap-4">
            <li className="font-bold">Inicio</li>
            <li><a href="#series">Series</a></li>
            <li><a href="#movies">Filmes</a></li>
        </ul>            
        </div>
        <div className="justify-self-end flex justify-items-end items-center">
            <form className="relative">
                <input className="w-full bg-black" type="text" placeholder="Título, gente e gêneros" />
                <button className="abosolute right-2"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
            <div className="flex ml-4">
                <img src={user} alt="Foto do usuário" />
                <button>
                    <FontAwesomeIcon className="ml-2" icon={faCaretDown} />
                </button>
                <ul className="hidden">
                    <li><a href="#account">Minha Conta</a></li>
                    <li><a href="#logout">Sair</a></li>
                </ul>
            </div>
        </div>
    
    </nav>

);

export default NavBar;
