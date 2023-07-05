import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


// declaring a public variable which connect to the omdbapi server 
// with my api key
const API_URL = 'http://www.omdbapi.com?apikey=9703997b'



// This my App function component.
const App = () => {
    const [movies, setMovies] = useState([]);

    const SearchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data =await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        SearchMovies('Extraction');
    }, []);

    // App display
    return(
        <div className='app'>
            <h1>Atech MovieLand</h1>

            {/* search bar container below */}
            <div className='search'>
                <input 
                    placeholder='Search for movies . . .' 
                    value='Extraction' 
                    onChange={() => {}}
                />

                <img
                    src={SearchIcon}
                    alt='Search Icon'
                    onClick={() => {}}
                />
            </div>

            {
                movies?.length > 0 ? 
                (
                    /* movie container */
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found!</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;