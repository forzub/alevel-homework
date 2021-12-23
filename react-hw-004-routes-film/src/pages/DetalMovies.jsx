import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetalMovies = ({ movies = [] }) => {

    const { id } = useParams();
    const [thisMovie, setThisMovie] = useState({});

    useEffect(
        () => {
            const movie = movies.find((m) => m.id == id);
            setThisMovie(movie);
        },
        [id]
    );


    return (
        <>
            <main className="main">
                <div className="wrp1024">
                    <h1>{thisMovie.name}</h1>
                    <Link to='/movies' >Вернуться назад</Link>
                </div>
            </main>

        </>
    );
}

export default DetalMovies;