import React, { useState, useEffect } from 'react';
import Stringify from '../Stringify';
import './Movies.css';
import Navbar from './Navbar'
const MoviesTask = () => {
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [input, setInput] = useState('')
    useEffect(() => {
        fetch('https://www.omdbapi.com/?s=spider&apikey=4a3b711b').then(response => response.json()).then(json => {
            setTimeout(() => {
                const { Search, totalResults } = json
                setMovies([...Search])
                setIsLoaded(true)
            }, 2000)
        })
    }, []);
    const inputHandler = (e) => {
        const { value } = e.target;
        setInput(value);
    }
    const Search = () => {
        fetch(`https://www.omdbapi.com/?s=${input}}&apikey=4a3b711b`).then(response => response.json()).then(json => {
            setTimeout(() => {
                const { Search, totalResults } = json
                setMovies([...Search]);
                setIsLoaded(true);
            }, 2000)
        })

    }
    return (
        <>
            <Navbar inputHandler={inputHandler} Search={Search}></Navbar>
            <div class='supriya'>

                <div class="body container">


                    <br /><br />
                    {!isLoaded && (<img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp?cid=ecf05e473a4f51a490adf0dee26169fe99ed2bfc1fbfccb9&rid=giphy.webp" />)}
                    <Stringify context={movies}></Stringify>

                    <div class="row">
                        {movies.map(({ Poster, Type, Year, Title }) => (

                            <div class=" col-4 ">
                                <div class="card ml-4" style={{ width: '18rem' }}>
                                    {(Poster == "N/A") ? (
                                        <img className="card-img-top" src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" width="150" height="150"></img>
                                    ) : (
                                            <img src={Poster} width="150" class="card-img-top" alt="..." />
                                        )}
                                    <div class="card-body bg-warning">
                                        <h5 class="card-title">{Title}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                        <h6>Year:{Year}</h6><br></br>
                                        <h6>Type:{Type}</h6>
                                    </div>


                                </div><br />
                            </div>

                        ))}

                    </div>

                </div>
            </div>

        </>
    )
}

export default MoviesTask