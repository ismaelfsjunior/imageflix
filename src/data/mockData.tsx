import cover1 from '../assets/movie1.jpg';
import cover2 from '../assets/movie2.jpg';
import cover3 from '../assets/movie3.jpg';

export interface Movie {
    title: string;
    cover: string;
    score?: number | string; 
}

const mockData: Movie[] = [
    {
        title: "Avengers",
        cover: cover1
    },
    {
        title: "Avengers",
        cover: cover2
    },
    {
        title: "Avengers",
        cover: cover3
    },    
    {
        title: "Avengers",
        cover: cover1
    },
    {
        title: "Avengers",
        cover: cover2
    },
    {
        title: "Avengers",
        cover: cover3
    }, 
    {
        title: "Avengers",
        cover: cover1
    },
    {
        title: "Avengers",
        cover: cover2
    },
    {
        title: "Avengers",
        cover: cover3
    }, 
    {
        title: "Avengers",
        cover: cover1
    },
    {
        title: "Avengers",
        cover: cover2
    },
    {
        title: "Avengers",
        cover: cover3
    },     
];

export default mockData;