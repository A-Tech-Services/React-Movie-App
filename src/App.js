import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';


// declaring a public variable which connect to the omdbapi server 
// with my api key
const API_URL = 'http://www.omdbapi.com?apikey=9703997b'


// This my App function component.
const App = () => {
    const SearchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data =await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        SearchMovies('Anikulapo');
    }, []);

    // App display
    return(
        <div className='app'>
            <h1>Movie-Land</h1>

            {/* search bar container below */}
            <div className='search'>
                <input 
                    placeholder='Search for movies . . .' 
                    value='Superman' 
                    onChange={() => {}}
                />

                <img
                    src={SearchIcon}
                    alt='Search Icon'
                />
            </div>
        </div>
    );
}

export default App;