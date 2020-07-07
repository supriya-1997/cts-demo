import React, { useState, useEffect } from 'react'
import Stringify from '../Stringify'
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [input,setInput]=useState('')

    useEffect(() => {
        fetch('https://www.omdbapi.com/?s=telugu&apikey=4a3b711b').then(response => response.json()).then(json => {
            setTimeout(() => {
                const { Search, totalResults } = json
                setMovies([...Search]);
                setIsLoaded(true);
            }, 2000)
        })
    }, []);
    const handleInput=(e)=>{
        const {value}=e.target;
        setInput(value);
    }
    const search=()=>{
        fetch(`https://www.omdbapi.com/?s=${input}}&apikey=4a3b711b`).then(response => response.json()).then(json => {
            setTimeout(() => {
                const { Search, totalResults } = json
                setMovies([...Search]);
                setIsLoaded(true);
            }, 2000)
        })
    } 
    
    return (
        
        <div class="input-group mb-3">
            <input type="text" onChange={handleInput} class="form-control" placeholder="Type to search the movie" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div class="input-group-append">
                <button onClick={search} class="btn btn-outline-success" type="button" id="button-addon2">Search</button>
            </div>


            <div>
                {!isLoaded && (<img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp?cid=ecf05e473a4f51a490adf0dee26169fe99ed2bfc1fbfccb9&rid=giphy.webp" />)}
                <Stringify context={movies}></Stringify>
                <div class="row">
                    {movies.map(({ Title, Year, Type, Poster }) => (
                        <div class="col-4">
                            <div class="card ml-4" style={{ width: '18rem' }}>
                                <img src={Poster} width="150" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{Title}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Year:{Year}</li>
                                    <li class="list-group-item">Type:{Type}</li>

                                </ul>
                                <div class="card-body">
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Movies