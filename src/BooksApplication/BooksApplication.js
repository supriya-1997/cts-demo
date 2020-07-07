import React from 'react'
import useBooksApplication from '../BooksApplication/useBooksApplication'
import LibraryBook from '../BooksApplication/LibraryBook'
import Music from '../BooksApplication/Music'
import Playing from '../BooksApplication/Playing'


const BooksApplication = () => {

    const { state:
        { 
            Book,
            MusicalInstrument,
             Sport
           
            
        }
    } = useBooksApplication();

    return (
        <>
            <div class="container">
            <div class="row">
                    {Book.map((item) =>
                        <LibraryBook item={item} />
                    )}
                </div>
            </div>

            <div class="container">
                <div class="row">
                    {MusicalInstrument.map((item) =>
                        <Music item={item} />
                    )}
                </div>
            </div>

            <div class="container">
            <div class="row">
                    {Sport.map((item) =>
                        <Playing item={item} />
                    )}
                </div>
            </div>

            
            


        </>
    )
}

export default BooksApplication
