import React from 'react';
import { useEffect , useState} from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';


//6529da47


const API_URL = "https://www.omdbapi.com?apikey=6529da47"

const App = () =>{

    const [movies, setMovies] = useState([]);
    const [SearchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
    }
    useEffect(()=>{

        searchMovies ('batman')

    },[])

    return(
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>

                <input 
                placeholder='Search for movies'
                value={SearchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img 
                src={SearchIcon}
                alt='search'
                onClick={() => searchMovies(SearchTerm)}
                />
            </div>

{
    movies?.length > 0 ? (
        <div className="container">
        {movies.map((movie)=> (
            <MovieCard movie={movie} />
        ))}
    </div>
    ) : (
        <div className="empty">
            <h2>Movies not found</h2>
        </div>
    )
}

        </div>
    );
}

export default App;