import React from 'react';
import Slick from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mockData, {Movie} from '../data/mockData';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Poster = ({cover, title}: Movie, index: number) => (
    <article key={index}>
        <img src={cover} alt={title}/>
    </article>    
); 

interface CarrouselData {
    title?: string;
    data?: Movie[];
};

const Carrousel = ({title = 'Carrousel', data = mockData}: CarrouselData) => {   
    enum Direction {
        left,
        right,
    };

    const SlickArrow = ({ direction, onClick, }: { direction: Direction; onClick?: () => void; }) => (
        <button type='button' className={`absolute w-16 h-full z-10 bg-black bg-opacity-50 top-0 ${direction ? 'right-0' : 'left-0'}`} onClick={onClick}>
          <FontAwesomeIcon
            icon={direction ? faChevronRight : faChevronLeft}
            size='3x'
          />
        </button>
      );    

    const options  = {
        Infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: <SlickArrow direction={Direction.left}/>,
        nextArrow: <SlickArrow direction={Direction.right}/>,
    };
    return (
        <section>
            <h2 className='relative z-10 font-bold text-2xl ml-6 mb-4'>{title}</h2>
            <Slick className='relative mb-8' {...options}>
                {data.map((movie, index) => Poster(movie, index))}
            </Slick> 
        </section>    
);
}

export default Carrousel;