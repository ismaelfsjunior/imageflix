import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import placeholder from '../assets/hero.png';
import Score from './Score';

import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";

const Hero = ({title = 'Avengers Endgame', score = 10}) => (
        <header className='box-border relative min-h-screen -mb-32' >
            <img className='object-cover object-center h-full w-full' 
                src={placeholder} 
                alt='Filme em destaque' 
            />
            <div className='absolute left-0 bottom-0 w-full h-64 bg-gradient-to-b from-transparent to-black'>

            </div>
            <article className='absolute bottom-0 mb-64 px-8'>
                <p className='text-2xl mb-4'>
                    Assistir agora:
                </p>
                <h2 className='mb-4 text-5xl font-bold'>
                    {title}
                </h2>
                <p className='text-base'>
                    Nota{' '}
                    <Score value={score} />
                </p>
                <button className='text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black'>
                    <FontAwesomeIcon className='mr-2' icon={faPlay}/>
                    Assitir
                </button>
                <button className='text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black'>
                <FontAwesomeIcon className='mr-2' icon={faPlus}/>
                    Minha Lista
                </button>
            </article>
        </header>        
);

export default Hero;
